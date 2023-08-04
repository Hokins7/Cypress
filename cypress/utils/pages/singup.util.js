const selectors = {
    firstName: '[id="customer.firstName"]',
    lastName: '[id="customer.lastName"]',
    streetAddress: '[id="customer.address.street"]',
    cityAddress: '[id="customer.address.city"]',
    stateAddress: '[id="customer.address.state"]',
    zipCode: '[id="customer.address.zipCode"]',
    phoneNumber: '[id="customer.phoneNumber"]',
    ssn: '[id="customer.ssn"]',
    userNickName: '[id="customer.username"]',
    password: '[id="customer.password"]',
    passwordConfirm: '[id="repeatedPassword"]',
    submitBtn: 'input[type="submit"]',
    welcomeMsg: '#rightPanel > .tittle'
}

const expected = {
    singupPageLink: '/parabank/register.htm',
    firstNameAcc: Cypress.env().FIRST_NAME,
    lastNameAcc: Cypress.env().LAST_NAME,
    streetAddressAcc: Cypress.env().STREET_ADDRESS,
    cityAddressAcc: Cypress.env().CITY,
    stateAddressAcc: Cypress.env().STATE,
    zipCodeAcc: Cypress.env().ZIP_CODE,
    phoneNumberAcc: Cypress.env().PHONE_NUMBER,
    ssnAcc: Cypress.env().SSN_NUMBER,
    userNickNameAcc: Cypress.env().NICK_NAME,
    passwordAcc: Cypress.env().PASSWORD,
    welcomeMsg: 'Welcome WitherGerald'
}

const fuctions = {
    openPage: () => { cy.open('/parabank/register.htm') },
    createAcoount: () => {
        cy.get(selectors.firstName).type(expected.firstNameAcc);
        cy.get(selectors.lastName).type(expected.lastNameAcc);
        cy.get(selectors.streetAddress).type(expected.streetAddressAcc);
        cy.get(selectors.cityAddress).type(expected.cityAddressAcc);
        cy.get(selectors.stateAddress).type(expected.stateAddressAcc);
        cy.get(selectors.zipCode).type(expected.zipCodeAcc);
        cy.get(selectors.phoneNumber).type(expected.phoneNumberAcc);
        cy.get(selectors.ssn).type(expected.ssnAcc);
        cy.get(selectors.userNickName).type(expected.userNickNameAcc);
        cy.get(selectors.password).type(expected.passwordAcc);
        cy.get(selectors.passwordConfirm).type(expected.passwordAcc);
        cy.get(selectors.submitBtn).last().click();
    }
}

export default {
    ...selectors,
    expected,
    fuctions
}