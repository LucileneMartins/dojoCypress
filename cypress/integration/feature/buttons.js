import cypressMethods from "../../support/methodsCypress.js";
import menu from "../../support/menu";
import elementForm from "../../support/pageObject/elementForm.js"


describe("Validar Buttons", () => {
  it("Buttons", () => {
    cypressMethods.openUrl("https://demoqa.com/");
    //menu.menuToolsqa("Elements");
    cy.contains("Elements").click();
    menu.selectSubMenu("Buttons")
    elementForm.doubleClick();
  });
});