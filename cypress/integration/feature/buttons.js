import cypressMethods from "../../support/methodsCypress.js";
import menu from "../../support/menu";
import elementForm from "../../support/pageObject/elementForm.js"


describe("Form Elements - Button", () => {
  before("Acess Demo Qa", () => {

    cypressMethods.openUrl("https://demoqa.com/");
    //menu.menuToolsqa("Elements");
    cy.contains("Elements").click();
    menu.selectSubMenu("Buttons")

  })
  it("Double click", () => {  
    elementForm.doubleClick();
  })

  it("Right Click", () =>{ 
    elementForm.rightClick();
  })

  it("Click Me ", () =>{ 
    elementForm.clickMe();
  })
});