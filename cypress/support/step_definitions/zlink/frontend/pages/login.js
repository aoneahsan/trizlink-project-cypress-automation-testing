// import cypress from "cypress";
import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";
let stub;
Before(()=>{
  cy.log('Execution Statred');
  stub=cy.stub()
})

Given("I access the Z-Link Website", () => {
  cy.visit("/");
});

When("I click on the login button at home menu", () => {
  cy.get('[cy-es="ztes__hp-nav-login-btn"]').click();
});

And("I enter the email {word}", (userEmail) => {
  cy.get('[cy-es="ztes__lp-email-input"]').first().type(userEmail);
});

And("I enter the password {word}", (password) => {
  cy.get('[cy-es="ztes__lp-password-input"]').type(password);
});

And("I click on the Login button", () => {
  cy.get('[cy-es="ztes__lp-login-btn"]').click();
});
Then(
  "I should be presented with the following message {word} {word}",
  (mesg1, mesg2) => {
    const assertMsg=`${mesg1} ${mesg2}`
    cy.wait(2000)
    cy.get(".Toastify__toast-body").should("contain", assertMsg);
 
  }
);

Then('I will be presented with following message {word} {word} {word} {word} {word} {word}',(msg1, msg2, msg3, msg4, msg5, msg6)=>{
  const message= `${msg1} ${msg2} ${msg3} ${msg4} ${msg5} ${msg6}`
  cy.wait(1000)
cy.get('ion-input .error-text ').should('be.visible').should('include.text',message)
})
// cy.get('ion-input .error-text').should('be.visible').should('include.text', 'no user found with this email.', { matchCase: false });

