import Account from '../../utils/pages/account.util'

describe('Elements', () => {
    it('Welcome message visible and correct' , () => {
        cy.get(Account.smallText)
            .should('be.visible')
            .and('have.text', Account.expected.smallText);
    })
})

describe('Functionality', () => {

})

describe('LogOut', () => {

})