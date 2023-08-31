import SingUp from '../../utils/pages/singup.util';
import Account from '../../utils/pages/account.util'

describe ('Create account', () => {
    before(() => cy.visit(SingUp.expected.singupPageLink));

    it('Creating account', () => {
        SingUp.fuctions.createAcoount();
        cy.get(SingUp.welcomeMsg).should('have.text', SingUp.expected.welcomeMsg);
        cy.get(Account.logOutBtn).click();
    })
})