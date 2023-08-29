const selectors = {
    smallText: '.smallText',
    openNewAccLink: 'a[href="/parabank/openaccount.htm"]',
    accOverview: 'a[href="/parabank/overview.htm"]',



}

const expected = {
    smallText: `Welcome ${Cypress.env().FIRST_NAME} ${Cypress.env().LAST_NAME}`,
    openNewAccLink: 'Open New Account',
    accOverview: 'Accounts Overview',
    

}

export default {
    ...selectors,
    expected
}