import { SELECTORS } from "../../../utils/selectors/element-selector";
import { Correct_Login_Email, Correct_Login_Password } from "../../../data/user/user-personal-data";

describe("T1 - Login Page Test - Should be able to login using correct credentials", () => {
  beforeEach("Open the website home page", () => {
    cy.visit("/");
  });
  
  it.only('should be able to login via right credentials', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click()
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(Correct_Login_Email);
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type(Correct_Login_Password);
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click()

  });
  it("open the login page and enter the details", () => {
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click();
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type('apple@gmail.com');
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type('121212');
    // cy.get('[cy-es="ztes__lp-login-btn"]').click();
    cy.get('[cy-es="ztes__lp-login-btn"]').should('not.be.enabled')
  });
  
});

