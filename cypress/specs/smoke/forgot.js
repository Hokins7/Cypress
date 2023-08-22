import Forgot from '../../utils/pages/forgot.util'
import MainPage from '../../utils/pages/main_page.util'
import SingUp from '../../utils/pages/singup.util'

describe('Elements', () => {

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
            .should('have.attr', 'value', Forgot.expected.submitBtn)
            .and('be.visible');
    })
})

describe('Functionality', () => {
    it('First name form is visible and accept data', () => {
        cy.get(Forgot.firstNameFrm)
            .type(SingUp.expected.firstNameAcc)
            .and('be.visible');
    })
    it('Last name form is visible and accept data', () => {
        cy.get(Forgot.lastNameFrm)
            .type(SingUp.expected.lastNameAcc)
            .and('be.visible');
    })
    it('Address form is visible and accept data', () => {
        cy.get(Forgot.addressStrFrm)
            .type(SingUp.expected.streetAddressAcc)
            .and('be.visible');
    })
    it('City form is visible and accept data', () => {
        cy.get(Forgot.addressCityFrm)
            .type(SingUp.expected.cityAddressAcc)
            .and('be.visible');
    })
    it('State form is visible and accept data', () => {
        cy.get(Forgot.addressStateFrm)
            .type(SingUp.expected.stateAddressAcc)
            .and('be.visible');
    })
    it('Zip Code form is visible and accept data', () => {
        cy.get(Forgot.zipCodeFrm)
            .type(SingUp.expected.zipCodeAcc)
            .and('be.visible');
    })
    it('SSN form is visible and accept data', () => {
        cy.get(Forgot.ssnFrm)
            .type(SingUp.expected.ssnAcc)
            .and('be.visible');
    })
    it('Submit button is visible and accept data', () => {
        cy.get(Forgot.submitBtn).click();
        cy.get(Forgot.subTittle)
            .first()
            .should('have.text', Forgot.expected.correctSubtittle);
        cy.get(Forgot.subTittle)
            .last().children().first()
            .should('have.text', Forgot.expected.username);
        cy.get(Forgot.subTittle)
            .last().children().last()
            .should('have.text', Forgot.expected.password);

    })
})

describe('Negative scenarios', () => {
    
    it('If information do not fill, error masages is apears', () => {
        cy.visit(Forgot.expected.link);
        cy.get(Forgot.submitBtn).click();

        cy.get(Forgot.firstNameErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.firstNameErrTxt);
        cy.get(Forgot.lastNameErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.lastNameErrTxt);
        cy.get(Forgot.addressStrErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.addressStrErrTxt);
        cy.get(Forgot.addressCityErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.addressCityErrTxt);
        cy.get(Forgot.addressStateErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.addressStateErrTxt);
        cy.get(Forgot.zipCodeErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.zipCodeErrTxt);
        cy.get(Forgot.ssnErr)
            .should('be.visible')
            .and('have.text', Forgot.expected.ssnErrTxt);

    })
})