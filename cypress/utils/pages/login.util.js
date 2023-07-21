//selectors
const selectors = {
  
}

//expectede results
const expected = {
 
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
    enterPassword,
    checkPage
}