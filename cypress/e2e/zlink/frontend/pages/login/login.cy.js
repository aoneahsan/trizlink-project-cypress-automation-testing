/// <reference types= 'cypress' />

describe("login test via z-link website", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[cy-es="ztes__hp-nav-login-btn"]').click();
  });
  const loginMesg = "Login successfully.";
  const validEmail = "ahsan@zaions.com";
  const invalidEmailNote = "EmailAddress needs to be a valid email.";
  const reqEmail = "EmailAddress is required";
  const validPasword = "asd123!@#";
  const shortPasMsg = "Password needs to be at least 8 digits long.";
  const digitalPasMsg = "Password must include a digit.";
  const specialChrcPasMsg = "Password must include a special character.";
  it("click on login button and expect login box and pssword box is visible and if we click on email box and click outside it should give an error", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').should("be.visible");
    cy.get(
      '[cy-es="ztes__lp-email-input"] .label-text-wrapper .label-text'
    ).should("have.text", "Email Address");
    cy.get('[cy-es="ztes__lp-email-input"]').click();
    cy.get(".zaions__separator_OR ").click();
    cy.get('[cy-es="ztes__lp-email-input"] .error-text')
      .should("be.visible")
      .should("contain", reqEmail);
  });
  it("should be able to login via home page using valid credentials and check that password should be visible and non-visible", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').type(validEmail);
    cy.get('[cy-es="ztes__lp-password-input"]').type(validPasword);
    cy.get('[cy-es="ztes__lp-see-password-btn"]').click();
    cy.get('[cy-es="ztes__lp-password-input"]').should("be.visible");
    cy.get('[cy-es="ztes__lp-see-password-btn"]').click();
    cy.get('[cy-es="ztes__lp-login-btn"]').click();
    cy.get('[cy-es="ztes__lp-password-input"]').should("not.be.visible");
    cy.wait(2000);
    cy.get(".Toastify__toast-body").should("contain", loginMesg);
  });

  it("should not be able to login via home page using invalid email and expect for an error regarding invalid email ", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').type("ahsan");
    // cy.get('.ion-justify-content-center').click(-20,-20)
    cy.get('[cy-es="ztes__lp-password-input"]').click();
    cy.get('[cy-es="ztes__lp-email-input"] .error-text')
      .should("be.visible")
      .should("contain", invalidEmailNote);
  });

  it("check that if we enter the pasowrd and then clicking outside then again clicking on pas box, the previous pasword should be there ", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').type(validEmail);
    cy.get('[cy-es="ztes__lp-password-input"]').type("asd");
    cy.get(".zaions__separator_OR ").click();
    cy.get('[cy-es="ztes__lp-password-input"] .error-text').should(
      "contain",
      shortPasMsg
    );
    cy.get('[cy-es="ztes__lp-email-input"]').click();
    cy.get('[cy-es="ztes__lp-password-input"]').click({ force: true });
    //development issue (if we insert password and then we click on somehere else and then click again on the password button, previous pasword will be removed)
    cy.get('[cy-es="ztes__lp-password-input"]')
      .type("as")
      .invoke("val")
      .its("length")
      .should("be.greaterThan", 4);
    cy.get('[cy-es="ztes__lp-login-btn"]').should("not.be.enabled");
  });

  it("should not be able to login via home page using pasword except digit and expect for an error regarding invalid password and emial button should be disabled ", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').type(validEmail);
    cy.get('[cy-es="ztes__lp-password-input"]').type("asddsdsss");
    cy.get(".zaions__separator_OR ").click();
    cy.get('[cy-es="ztes__lp-password-input"] .error-text').should(
      "contain",
      digitalPasMsg
    );
    cy.get('[cy-es="ztes__lp-login-btn"]').should("not.be.enabled");
  });
  it("should not be able to login via home page using pasword except special character and expect for an error regarding invalid password and emial button should be disabled ", () => {
    cy.get('[cy-es="ztes__lp-email-input"]').type(validEmail);
    cy.get('[cy-es="ztes__lp-password-input"]').type("asd12as1");
    cy.get(".zaions__separator_OR ").click();
    cy.get('[cy-es="ztes__lp-password-input"] .error-text').should(
      "contain",
      specialChrcPasMsg
    );
    cy.get('[cy-es="ztes__lp-login-btn"]').should("not.be.enabled");
  });
});
