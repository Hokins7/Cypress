import Login from '../../utils/pages/login.util';

describe ('Authorization', () => {

    before(() => cy.visit('/'));

    it('Login', () => {
        Login.checkLoginSection();
        Login.enterUsername(Login.expected.login);
        Login.enterPassword(Login.expected.password);
        cy.get(Login.logginBtn).click();
        cy.get(Login.accountPanel).should('be.visible');
    })

    it('Logout', () => {
        
    })

    it ('Remind password', () => {
    
    })
})