/// <reference types= 'cypress' />

describe("login test via z-link website", () => {
  const userName = "Apple";
  const emailAdress = "aqdesign99@gmail.com";
  const password = "apple@302";
  const userNameBtn = '[cy-es="ztes__sp-username-input"]';
  const emailAdressBtn = '[cy-es="ztes__sp-email-input"]';
  const passwordBtn = '[cy-es="ztes__sp-password-input"]';
  const confirmPasswordBtn = '[cy-es="ztes__sp-confirm-password-input"]';
  const signUpBtn = '[cy-es="ztes__sp-form-submit-btn"]';
  const userNAmeErrorMsg = "Username is required";
  beforeEach(() => {
    cy.visit("/");
    cy.get('[cy-es="ztes__hp-nav-signup-btn"]').click();
  });

  it("should be able to signUp via Z-Link", () => {
    cy.get(userNameBtn).type(userName);
    cy.get(emailAdressBtn).type(emailAdress);
    cy.get(passwordBtn).type(password);
    cy.get(confirmPasswordBtn).type(password);
    cy.get('[cy-es="ztes__sp-see-confirm-password-btn"]').click();
    // cy.get('#ion-input-2').should('be.visible')
    cy.get(signUpBtn).click();
  });
  it.only("should not be able to login by not entering username and got an error mesage", () => {
    cy.get(userNameBtn).click();
    cy.get('[cy-es="ztes__sp-email-input"]').click();
    cy.get('[cy-es="ztes__sp-username-input"] .error-text').should(
      "contain",
      userNAmeErrorMsg
    );
  });

  it("", () => { });
  it("", () => { });

  it(" ", () => { });
  it("", () => { });
});
