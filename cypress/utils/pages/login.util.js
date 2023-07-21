//selectors
const selectors = {
    loginPage: '.customer-account-login',
    pageTittle: '.base',
    regCustSec: '#block-customer-login-heading',
    newCustSec: '#block-new-customer-heading',
    fieldNote: '.field note',
    labelForEmail: "//label[@for='email']",
    emailInput: '#email',
    labelForPass: "(//label[@for='pass'])[1]",
    passInput: '#pass',
    signInBtn: '#send2',
    remindLink: '.action remind > span',
    fieldNote2: '.block-content > p',
    createUserBtn: '.action create primary'
}

//expectede results
const expected = {
    tittle: 'Customer Login',
    subTittle: 'Registered Customers',
    noteField1: 'If you have an account, sign in with your email address.',
    emailLabel: 'Email',
    passLabel: 'Password',
    signInLabel: 'Sign In',
    forgotPassLabel: 'Forgot Your Password?',
    newCustLabel: 'New Customers',
    newCustSubTittle: 'Creating an account has many benefits: check out faster, keep more than one address, track orders and more.',
    createAccLabel: 'Create an Account',
    demoEmail: 'roni_cost@example.com',
    demoPass: 'roni_cost3@example.com'
}

 // Fuctions
 const openPage = () => {
    cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
 };
 const checkPage = () => {
    cy.get(selectors.loginPage).should('be.visible');
 }
 const enterEmail  = (value) => {
    cy.get(selectors.emailInput).clear()
    cy.get(selectors.emailInput).type(value)
 };

 const enterPassword  = (value) => {
    cy.get(selectors.passInput).clear()
    cy.get(selectors.passInput).type(value)
 };

export default {
    ...selectors,
    expected,
    openPage,
    enterEmail,
    enterPassword
}