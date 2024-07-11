import DocBlock from "./components/block.js";

/** @type {HTMLSection} */
const sectionSidebar = document.querySelector("#section-sidebar");

/** @type {HTMLButtonElement} */
const sectionSidebarBtnNewNode = document.querySelector("#section-sidebar-btn-newnote");
/** @type {HTMLElement} */
const sectionSidebarSectionNoteList = document.querySelector("#section-sidebar-section-notelist");


/** @type {HTMLElement} */
const sectionDocs = document.querySelector("#section-docs");

/** @type {HTMLDivElement} */
const sectionDocsDivOptions = document.querySelector("#section-docs-div-options");

/** @type {HTMLButtonElement} */
const sectionDocsDivOptionsBtnSaveDoc = document.querySelector("#section-docs-div-options-btn-savedoc");
/** @type {HTMLSelectElement} */
const sectionDocsDivOptionsSelectNewBlock = document.querySelector("#section-docs-div-options-select-newblock");
/** @type {HTMLButtonElement} */
const sectionDocsDivOptionsBtnCloseDoc = document.querySelector("#section-docs-div-options-btn-closedoc");


/** @type {HTMLDivElement} */
const sectionDocsDivDoc = document.querySelector("#section-docs-div-doc");


// main
{
  sectionSidebarBtnNewNode.addEventListener("click", () => {
    const elementDocBlock = document.createElement(DocBlock);

    const message = document.createElement("p");
    message.slot = "message";
    message.innerText = "note";
    elementDocBlock.appendChild(message);

    sectionSidebarSectionNoteList.appendChild(elementDocBlock);
  });



  sectionDocsDivOptionsSelectNewBlock.addEventListener("change", () => {
    const optionValue = sectionDocsDivOptionsSelectNewBlock.value;
    const elementDocBlock = document.createElement(DocBlock);

    const message = document.createElement("p");
    message.slot = "message";
    message.innerText = `${optionValue} block`;
    elementDocBlock.appendChild(message);

    sectionDocsDivDoc.appendChild(elementDocBlock);

    sectionDocsDivOptionsSelectNewBlock.value = "";
  });


};
