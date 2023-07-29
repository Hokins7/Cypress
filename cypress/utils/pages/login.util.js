//selectors
const selectors = {
   leftPanel: '#leftPanel',
   heading: '#leftPanel > h2',
   loginPanel: '#loginPanel',
   loginSectionHeading: 'form[name="login"] > p:nth-child(1)',
   passSectionHeading: 'form[name="login"] > p:nth-child(2)',
   loginField: 'input[type="text"]',
   passField: 'input[type="password"]',
   logginBtn: 'input[type="submit"]',
   forgotLink: 'a[href="lookup.htm"]',
   registerLink: 'a[href="register.htm"]',
   accountPanel: '.ng-scope'
}

//expectede results
const expected = {
   heading: 'Customer Login',
   loginSectionHeading: 'Username',
   passSectionHeading: 'Password',
   logginBtnText: 'Log In',
   forgotLinkText: 'Forgot login info?',
   registerLinkText: 'Register',
}

 // Fuctions
 const checkLoginSection = () => {
    cy.get(selectors.loginPanel).should('be.visible');
 }
 const enterUsername  = (value) => {
    cy.get(selectors.loginField).clear()
    cy.get(selectors.loginField).type(value)
 };

 const enterPassword  = (value) => {
    cy.get(selectors.passField).clear()
    cy.get(selectors.passField).type(value)
 };

export default {
    ...selectors,
    expected,
    enterUsername,
    enterPassword,
    checkLoginSection
}