import cypressMethods from "../../support/methodsCypress.js";
import menu from "../../support/menu";
import elementForm from "../../support/pageObject/elementForm.js"

describe("Toolqa", () => {
    it("Form Element CheckBox", () => {
 
      cypressMethods.openUrl('/')
      menu.menuToolsqa("Elements");
      menu.selectSubMenu("Text Box");
      elementForm.formElements();
      
    })
  });