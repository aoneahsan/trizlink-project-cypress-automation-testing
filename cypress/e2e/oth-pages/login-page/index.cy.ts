import { SELECTORS } from "../../../utils/selectors/element-selector";
import { USER_DETAILS } from "../../../data/user/user-personal-data";


describe("T1 - Login Page Test - Should be able to login using correct credentials", () => {
  beforeEach("Open the website home page", () => {
    cy.visit("/");
  });
  
  it('should be able to login via right credentials', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click()
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(USER_DETAILS.CORRECT.Login_Email);
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type(USER_DETAILS.CORRECT.Login_Password);
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click();
    // cy.wait(2000)
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.New_Workspace_TL_Button).should('be.visible')

  });
  it("should not be able to login via wrong credentials", () => {
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click()
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(USER_DETAILS.Wrong.Login_Email);
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type(USER_DETAILS.Wrong.Login_Password);
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click();
cy.get(SELECTORS.PAGES.LOGIN.Login_Button).should('not.be.enabled'),
cy.get('#loading-4-msg').should('not.be.visible'),
cy.get(`${SELECTORS.PAGES.LOGIN.Email_Input_Text} .error-text`).should('contain','No User found with this email.')
  });
  it('testing error messages by entering email with @ symbol', ()=>{
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click()
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(USER_DETAILS.Wrong.Login_Email_e_symbol);
    cy.get('.relative').click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Email_Input_Text} .error-text`).should('contain','email address needs to be a valid email.')
  })
});

