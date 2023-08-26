import Login from '../../utils/pages/login.util';
import SingUp from '../../utils/pages/singup.util'

describe ('Authorization', () => {

    before(() => cy.visit('/'));

    it('Login', () => {
        Login.checkLoginSection();
        Login.logIn(SingUp.expected.userNickNameAcc, SingUp.expected.passwordAcc);
        cy.get(Login.accountPanel).should('be.visible');
    })

    it('LogOut function works correctly', () => {
            Login.LogOut();
    })
})

describe ('Negative scenarios', () => {
    before(() => cy.visit('/'));

        it('Error message appears when input wrong information', () => {
            cy.get(Login.logginBtn).click();
            cy.get(Login.errorTittle)
                .should('be.visible')
                .and('have.text', Login.expected.errorTittle);
            cy.get(Login.errorMsg)
                .should('be.visible')
                .and('have.text', Login.expected.errorMsg);
        })

})