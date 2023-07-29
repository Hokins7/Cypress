import SingUp from '../../utils/pages/singup.util'

describe ('Create account', () => {
    before(() => cy.visit(SingUp.expected.singupPageLink));

    it('Creating account', () => {
        SingUp.fuctions.createAcoount();
        cy.get(SingUp.welcomeMsg).should('have.text', SingUp.expected.welcomeMsg);
    })
})