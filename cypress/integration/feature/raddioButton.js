import cypressMethods from "../../support/methodsCypress.js";
import menu from "../../support/menu";
import elementForm from "../../support/pageObject/elementForm.js"


describe("Toolsqa2", () => {
  it("radioButton", () => {
   
    cypressMethods.openUrl("https://demoqa.com/");
    menu.menuToolsqa("Elements");
    menu.selectSubMenu("Radio Button");
    elementForm.radioButton("Yes");
  });
});