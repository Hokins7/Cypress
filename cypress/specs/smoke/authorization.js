import Login from '../../utils/pages/login.util';
import SingUp from '../../utils/pages/singup.util'

describe ('Authorization', () => {

    before(() => cy.visit('/'));

    it('Login', () => {
        Login.checkLoginSection();
        Login.enterUsername(SingUp.expected.userNickNameAcc);
        Login.enterPassword(SingUp.expected.passwordAcc);
        cy.get(Login.logginBtn).click();
        cy.get(Login.accountPanel).should('be.visible');
    })

    it('Logout', () => {
        
    })

    it ('Remind password', () => {
    
    })
})