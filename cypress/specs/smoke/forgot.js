import Forgot from '../../utils/pages/forgot.util'
import MainPage from '../../utils/pages/main_page.util'

describe ('Elements', () => {

    before(() => cy.visit(Forgot.expected.link));

    it('Main panel is displayed', () => {
        cy.get(MainPage.rightPanel).should('be.visible');
    })
    it('Tittle is visible and has correct text', () => {
        cy.get(Forgot.tittle)
            .should('have.text', Forgot.expected.tittle)
            .and('be.visible');
    })
    it('Subtittle is visible and has correct text', () => {
        cy.get(Forgot.subTittle)
            .should('have.text', Forgot.expected.subTittle)
            .and('be.visible');
    })
    it('Firstname text is visible and has a correct text', () => {
        cy.get(Forgot.firstNameTxt)
            .should('have.text', Forgot.expected.firstNameTxt)
            .and('be.visible');
    })
    it('Lastname text is visible and has a correct text', () => {
        cy.get(Forgot.lastNameTxt)
            .should('have.text', Forgot.expected.lastNameTxt)
            .and('be.visible');
    })
    it('Address text is visible and has a correct text', () => {
        cy.get(Forgot.addressStrTxt)
            .should('have.text', Forgot.expected.addressStrTxt)
            .and('be.visible');
    })
    it('City text is visible and has a correct text', () => {
        cy.get(Forgot.addressCityTxt)
            .should('have.text', Forgot.expected.addressCityTxt)
            .and('be.visible');
    })
    it('State text is visible and has a correct text', () => {
        cy.get(Forgot.addressStateTxt)
            .should('have.text', Forgot.expected.addressStateTxt)
            .and('be.visible');
    })
    it('ZipCode text is visible and has a correct text', () => {
        cy.get(Forgot.zipCodeTxt)
            .should('have.text', Forgot.expected.zipCodeTxt)
            .and('be.visible');
    })
    it('SSN text is visible and has a correct text', () => {
        cy.get(Forgot.ssnTxt)
            .should('have.text', Forgot.expected.ssnTxt)
            .and('be.visible');
    })
    it('Submit button is visible and has a correct text', () => {
        cy.get(Forgot.submitBtn)
            .should('have.attr','value',Forgot.expected.submitBtn)
            .and('be.visible');
    })
})

describe ('Functionality', () => {
    
})