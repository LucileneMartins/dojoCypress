
import cypressMethods from "../methodsCypress";

var fullName = "#userName";
var email = "#userEmail";
var currentAddress = "#currentAddress";
var permanentAddress = "#permanentAddress";
var submit = "#submit";
var check = ".rct-checkbox";
var checked =  "rct-icon rct-icon-check"
var checkChild = ".rct-checkbox > svg";
var radioYes = "label[for='yesRadio']";
var radioImpressive = "label[for='impressiveRadio']";
var clickNdouble = "#doubleClickBtn";
var rightButton = "#rightClickBtn"
var clickMe = "button[type='button']";

class FormElement {
  
    formElements() {
    cypressMethods.typeElement(fullName, "teste 123");
    cypressMethods.typeElement(email, "teste@gmail.com");
    cypressMethods.typeElement(currentAddress, "Rua Teste");
    cypressMethods.typeElement(permanentAddress, "Rua teste");
    cypressMethods.clickButton(submit);
    
  }

  checkbox(){
    cypressMethods.clickButton(check);
    cy.get(checkChild).should('have.attr', 'class', checked);
  }

  doubleClick(){
    cypressMethods.doubleClick(clickNdouble);
    cy.contains('You have done a double click').should('be.visible');
  }

  rightClick(){
    cypressMethods.rightClick(rightButton);
    cy.contains('You have done a right click').should('be.visible');
  }

  clickMe(){
    cypressMethods.clickMe(clickMe);
    cy.contains("You have done a dynamic click").should('be.visible');
  }

  radioButton(value){
    
    if(value == "Yes"){
      cypressMethods.clickButton(radioYes);
    }
    else if(value == "Impressive"){
      cypressMethods.clickButton(radioImpressive);
    }
  
    cy.contains("You have selected " + value).should('be.visible');
  }

}

const formElement = new FormElement();
export default formElement;





