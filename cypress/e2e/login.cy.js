/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPOM";
const { email, password } = Cypress.env();
const board = 'Board'

describe('Login', () => {

    it('Successful login', () => {
        loginPage.login(email, password)
        cy.url().should('not.contain', '/login')
    });
    it('Unsuccessful login wrong email input', () => {
        loginPage.login('v', password)
        cy.url().should('contain', '/login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    });
    it('Unsuccessful login wrong password', () => {
        loginPage.login(email, 'asdfag')
        cy.url().should('contain', '/login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    });
    it('Unsuccessful login wrong email adress', () => {
        loginPage.login('zokindadnjksadn@gmail.com', password)
        cy.url().should('contain', '/login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    });
    
    })
