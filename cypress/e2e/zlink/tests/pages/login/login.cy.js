/// <reference types= 'cypress' />

import { userSignUpData, userLoginData } from '../../../data/user'
import { getRandomStr, generatePasswordString } from '../../../utils/helpers'

// Constants
const loginMsg = 'Login successfully.' // move to messages file
const invalidEmailNote = 'EmailAddress needs to be a valid email.' // messages
const reqEmail = 'EmailAddress is required'
const validPasword = 'asd123!@#' // data/[file-name]
const shortPasMsg = 'Password needs to be at least 8 digits long.'
const digitalPasMsg = 'Password must include a digit.'
const specialChrcPasMsg = 'Password must include a special character.'
const emailBtn = '[cy-es="ztes__lp-email-input"]' // move to constants/element-selectors.js
const paswordBtn = '[cy-es="ztes__lp-password-input"]'
const orText = '.zaions__separator_OR'
const loginBtn = '[cy-es="ztes__lp-password-input"]'
const pasErrorText = '[cy-es="ztes__lp-password-input"] .error-text'
const emailErrorText = '[cy-es="ztes__lp-email-input"] .error-text'

// Test Cases
describe('login test via z-link website', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[cy-es="ztes__hp-nav-login-btn"]').click()
  })

  it('click on login button and expect login box and pssword box is visible and if we click on email box and click outside it should give an error', () => {
    cy.get(emailBtn).should('be.visible')
    cy.get(
      '[cy-es="ztes__lp-email-input"] .label-text-wrapper .label-text'
    ).should('have.text', 'Email Address')
    cy.get(emailBtn).click()
    cy.get(orText).click()
    cy.get(emailErrorText)
      .should('be.visible')
      .should('contain', reqEmail)
  })
  it('should be able to login via home page using valid credentials and check that password should be visible and non-visible', () => {
    cy.get(emailBtn).type(validEmail)
    cy.get(paswordBtn).type(validPasword)
    cy.get('[cy-es="ztes__lp-see-password-btn"]').click()
    cy.get('[cy-es="ztes__lp-password-input"] .native-input').should(
      'be.visible'
    )
    cy.get('[cy-es="ztes__lp-see-password-btn"]').click({ force: true })
    // cy.get('[cy-es="ztes__lp-password-input"] .native-input').should(
    //   "be.hidden"
    // );
    cy.get(loginBtn).click()
    cy.wait(2000)
    cy.get('.Toastify__toast-body').should('contain', loginMsg)
  })

  it('should not be able to login via home page using invalid email and expect for an error regarding invalid email ', () => {
    cy.get(emailBtn).type('ahsan')
    // cy.get('.ion-justify-content-center').click(-20,-20)
    cy.get(paswordBtn).click()
    cy.get(emailErrorText)
      .should('be.visible')
      .should('contain', invalidEmailNote)
  })

  it.only('check that if we enter the pasowrd and then clicking outside then again clicking on pas box, the previous pasword should be there ', () => {
    cy.log('userLoginData', userLoginData)
    console.log({ userLoginData })

    cy.get(emailBtn).type(userLoginData.validEmail)
    cy.get(paswordBtn).type(getRandomStr())
    cy.get(orText).click()
    cy.get(pasErrorText).should('contain', shortPasMsg)
    cy.get(emailBtn).click()
    cy.get(paswordBtn).click({ force: true })
    //development issue (If we insert a password, click somewhere else, and click again on the password box, the previous password will be removed.)
    cy.get(paswordBtn)
      .type('as')
      .invoke('val')
      .its('length')
      .should('be.greaterThan', 4)
    cy.get(loginBtn).should('not.be.enabled')
  })

  it('should not be able to login via home page using pasword except digit and expect for an error regarding invalid password and emial button should be disabled ', () => {
    cy.get(emailBtn).type(userLoginData.validEmail)
    cy.get(paswordBtn).type(generatePasswordString(8, true, true, false))
    cy.get(orText).click()
    cy.get(pasErrorText).should('contain', digitalPasMsg)
    cy.get(loginBtn).should('not.be.enabled')
  })
  it('should not be able to login via home page using pasword except special character and expect for an error regarding invalid password and emial button should be disabled ', () => {
    cy.get(emailBtn).type(userLoginData.validEmail)
    cy.get(paswordBtn).type('asd12as1')
    cy.get(orText).click()
    cy.get(pasErrorText).should('contain', specialChrcPasMsg)
    cy.get(loginBtn).should('not.be.enabled')
  })
})
