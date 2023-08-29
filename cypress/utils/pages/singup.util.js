const selectors = {
    firstName: '#customer\\.firstName',
    lastName: '#customer\\.lastName',
    streetAddress: '#customer\\.address\\.street',
    cityAddress: '#customer\\.address\\.city',
    stateAddress: '#customer\\.address\\.state',
    zipCode: '#customer\\.address\\.zipCode',
    phoneNumber: '#customer\\.phoneNumber',
    ssn: '#customer\\.ssn',
    userNickName: '#customer\\.username',
    password: '#customer\\.password',
    passwordConfirm: '#repeatedPassword',
    submitBtn: 'input[type="submit"]',
    welcomeMsg: '#rightPanel > .title',
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
    welcomeMsg: `Welcome ${Cypress.env().NICK_NAME}`,
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