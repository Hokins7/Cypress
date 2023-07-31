import Login from '../../utils/pages/login.util';
import SingUp from '../../utils/pages/singup.util'

describe ('Authorization', () => {

    before(() => cy.visit('/'));

    it('Login', () => {
        Login.checkLoginSection();
        Login.logIn(SingUp.expected.userNickNameAcc, SingUp.expected.passwordAcc);
        cy.get(Login.accountPanel).should('be.visible');
    })

    it('Logout', () => {
        
    })

    it ('Remind password', () => {
    
    })
})