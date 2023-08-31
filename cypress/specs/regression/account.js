import Account from '../../utils/pages/account.util'

describe('Elements', () => {
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
})

describe('Functionality', () => {

})

describe('LogOut', () => {

})