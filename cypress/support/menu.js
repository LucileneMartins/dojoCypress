
class Menu{    
  

    menuToolsqa(menuselect){
        cy.contains(menuselect).click();
    }

    selectSubMenu(subMenu){
        cy.contains(subMenu).click();
    }

    
}

const menu = new Menu();
export default menu;