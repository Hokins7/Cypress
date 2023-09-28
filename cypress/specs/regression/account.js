import Account from '../../utils/pages/account.util'
import LogIn from '../../utils/pages/login.util'
import SingUp from '../../utils/pages/singup.util';

describe('Elements', () => {
    before(() => {
        cy.visit('/');
        LogIn.checkLoginSection();
        LogIn.logIn(SingUp.expected.userNickNameAcc, SingUp.expected.passwordAcc);
    });

    it('Welcome message visible and correct', () => {
        cy.get(Account.smallText)
            .should('be.visible')
            .and('have.text', Account.expected.smallText);
    })
    it('First link visible and have a correct text', () => {
        cy.get(Account.openNewAccLink)
            .should('be.visible')
            .and('have.text', Account.expected.openNewAccTxt);
    })
    it('Second link visible and have a correct text', () => {
        cy.get(Account.accOverviewLink)
            .should('be.visible')
            .and('have.text', Account.expected.accOverviewTxt);
    })
    it('Third link visible and have a correct text', () => {
        cy.get(Account.transfFundsLink)
            .should('be.visible')
            .and('have.text', Account.expected.transfFundsTxt);
    })
    it('Four link visible and have a correct text', () => {
        cy.get(Account.billPayLink)
            .should('be.visible')
            .and('have.text', Account.expected.billPayTxt);
    })
    it('Five link visible and have a correct text', () => {
        cy.get(Account.findTransactionLink)
            .should('be.visible')
            .and('have.text', Account.expected.findTransactionTxt);
    })
    it('Six link visible and have a correct text', () => {
        cy.get(Account.updateContInfoLink)
            .should('be.visible')
            .and('have.text', Account.expected.updateContInfoTxt);
    })

    it('Seven link visible and have a correct text', () => {
        cy.get(Account.requestLoanLink)
            .should('be.visible')
            .and('have.text', Account.expected.requestLoanTxt);
    })
    it('LogOut button visible and have a correct text', () => {
        cy.get(Account.logOutBtn)
            .should('be.visible')
            .and('have.text', Account.expected.logOutBtnTxt);
    })
})

describe('Functionality', () => {
    it('First link redirect to the correct page', () => {
        cy.get(Account.openNewAccLink).click();
        cy.url().should('include', ' ');
        cy.go('back');
    })
    it('Second link redirect to the correct page', () => {
        cy.get(Account.accOverviewLink).click();
        cy.url().should('include', ' ');
        cy.go('back');
    })
    it('Third link redirect to the correct page', () => {
        cy.get(Account.transfFundsLink).click();
        cy.url().should('include', ' ');
        cy.go('back');
    })
    it('Fourth link redirect to the correct page', () => {
        cy.get(Account.billPayLink).click();
    })
    it('Fifth link redirect to the correct page', () => {
        cy.get(Account.findTransactionLink).click();
    })
    it('Sixth link redirect to the correct page', () => {
        cy.get(Account.updateContInfoLink).click();
    })

})

describe('LogOut', () => {

})