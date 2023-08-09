/// <reference types="cypress" />

describe('Login Into App', () => {
  it('Go to Login Page and Enter Correct Login Details, it should login successfully', () => {
    cy.visit('/')

    cy.get('.ion-color-dark > ._zaions_nav_button_z3mnj_1').click()

    cy.get('ion-input[name="emailAddress"]').type('ahsan@zaions.com')

    // next steps
    /**
     * password // asd123!@#
     * login button click
     *
     * ad
     * asd
     * asd
     *
     */
  })
})
