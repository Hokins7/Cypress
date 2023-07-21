import Login from '../../utils/pages/login.util';
import Header from '../../utils/elements/header.util';

describe ('Authorization', () => {

    before (() => {
        Login.openPage();
    })

    it('Login', () => {
        Login.checkPage();
        Login.enterEmail(Login.expected.demoEmail);
        Login.enterPassword(Login.expected.demoPass);
        cy.get(Login.signInBtn).click();
    })

    it('Logout', () => {
        
    })

    it ('Remind password', () => {
    
    })
})