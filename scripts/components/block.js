"use strict";

const elementName = "doc-block";

customElements.define(elementName,
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      const wrapper = document.createElement("div");
      wrapper.id = "wrapper";

      const style = document.createElement("style");
      style.innerHTML = `     
      #wrapper {
        border: 5px solid darkgray;
        position: relative;
      }

      #delete-btn {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
      `;
      wrapper.appendChild(style);

      const slotMessage = document.createElement("slot");
      slotMessage.name = "message"
      slotMessage.innerText = "this is a doc block";
      wrapper.appendChild(slotMessage);

      const deleteBtn = document.createElement("button");
      deleteBtn.id = "delete-btn"
      deleteBtn.innerText = "Delete this";
      deleteBtn.addEventListener("click", () => {
        this.parentNode.removeChild(this);
      })
      wrapper.appendChild(deleteBtn);

      shadowRoot.appendChild(wrapper);
    }

    connectedCallback() {
      const _id = crypto.randomUUID().replaceAll("-", "")
      this.id = `db-${_id}`;

      this.shadowRoot.querySelector("slot[name=message]").innerText = `this is a doc block ${_id}`;

      console.log(`id: ${this.id} created`);
    }

    disconnectedCallback() {
      console.log(`id: ${this.id} deleted`);
    }
  }
)

export default elementName;
