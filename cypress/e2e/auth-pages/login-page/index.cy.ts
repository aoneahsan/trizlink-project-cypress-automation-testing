import { SELECTORS } from '@trzSelectors/element-selector';
import { USER_DETAILS } from '@trzData/user';

// Login page tests via using correct and wrong credentials (error-messages)
describe('T1 - Login Page Test - Should be able to login using correct credentials', () => {
  beforeEach('Open the website home page', () => {
    // visit the home page of website (prettylinks.zaions.com)
    cy.visit('/');
    // home page login button at the header section
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button_HP).click();
  });
  // user enter the correct email and password to Login to the website prettylinks.zaions.com
  it('should be able to login via right credentials', () => {
    // Login page Email input field where user enter the email
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Email
    );
    // Login page password input field where user enter the password
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Password
    );
    // login page login button where user click to Login to the website
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click();
    // cy.wait(2000)
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.New_Workspace_TL_Button).should(
      'be.visible'
    );
  });
  // user enter the wrong email but correct password to Login to the website
  it('should not be able to log in via wrong email credentials', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.Wrong.Login_Email
    );
    cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Password
    );
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click();
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button)
      .should('contain', 'Log in')
      .should('not.be.enabled');

    cy.get('#loading-4-msg').should('not.be.visible');
    cy.get(`${SELECTORS.PAGES.LOGIN.Email_Input_Text} .error-text`).should(
      'contain',
      'No User found with this email.'
    );
  });
  it('testing error messages by entering email without @ symbol', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.Wrong.Login_Email_e_symbol
    );
    cy.get(SELECTORS.PAGES.GENERAL.Or_Text).click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Email_Input_Text} .error-text`).should(
      'contain',
      'email address needs to be a valid email.'
    );
  });
  it('should not be able to log in via five-digit password and should get an error message', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Email
    );
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).type(
      USER_DETAILS.Wrong.Password_5digit
    );
    cy.get(SELECTORS.PAGES.GENERAL.Or_Text).click();
    // cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text);
    // cy.window().trigger('blur');
    // cy.get(SELECTORS.PAGES.LOGIN.Password_Input_Text).tab();
    // cy.get('.ion-justify-content-center').click();
    // cy.get(SELECTORS.PAGES.LOGIN.Login_Button).click();
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).should('not.be.enabled');
    // cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text} .error-text`).should('contain','password needs to be at least 8 digits long.');
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text} .error-text`).should(
      'be.visible'
    );
  });
  it('should not be able to log in via using the correct email, but the password should not include numbers but greater than eight digits  ', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Email
    );
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).type(
      USER_DETAILS.Wrong.Password_wo_numbers
    );
    cy.get(SELECTORS.PAGES.GENERAL.Or_Text).click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text} .error-text`).should(
      'contain',
      'password must include a digit.'
    );
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).should('not.be.enabled');
  });
  it('should not be able to log in via using the valid email, but the password should not contain alphabets', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Email
    );
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).type(
      USER_DETAILS.Wrong.Password_wo_alphabets
    );
    cy.get(SELECTORS.PAGES.GENERAL.Or_Text).click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text} .error-text`).should(
      'contain',
      'password must include a letter.'
    );
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).should('not.be.enabled');
  });
  it('should not be able to log in via using a valid email, but the password should not contain special characters, and the password should be visible when clicking on the eye icon', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Email_Input_Text).type(
      USER_DETAILS.CORRECT.Login_Email
    );
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).type(
      USER_DETAILS.Wrong.Password_wo_sp_character
    );
    cy.get(SELECTORS.PAGES.LOGIN.Password_eye_icon).click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).should(
      'have.attr',
      'type',
      'text'
    );
    cy.get(SELECTORS.PAGES.LOGIN.Password_eye_icon).click();
    cy.get(SELECTORS.PAGES.GENERAL.Or_Text).click();
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text}`).should(
      'have.attr',
      'type',
      'password'
    );
    cy.get(`${SELECTORS.PAGES.LOGIN.Password_Input_Text} .error-text`).should(
      'contain',
      'password must include a special character.'
    );
    cy.get(SELECTORS.PAGES.LOGIN.Login_Button).should('not.be.enabled');
  });
  // forget password button weather it lands on the correct page or not and reload and get back to previous page as well
  it.only('After landing on the Login page, you should be able to connect the forget password button to see whether it goes to the  correct page.', () => {
    cy.get(SELECTORS.PAGES.LOGIN.Forget_Password_Btn).click();
    cy.url().should('include', SELECTORS.PAGES.URLS.Forget_Password_Page);
    // this is the selector of the forgot password text at the top of the forgot-password page. as there was no selector so i use its class to make an assertion.
    cy.get('.mb-3').should('contain', 'Forget your password');
    cy.reload();
    cy.go('back');
    // testing weather the go back command lands on the same url on not.
    cy.url().should('include', SELECTORS.PAGES.URLS.Login_Page);
  });
});
