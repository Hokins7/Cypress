const selectors = {
    smallText: '.smallText',
    openNewAccLink: 'a[href="/parabank/openaccount.htm"]',
    accOverviewLink: 'a[href="/parabank/overview.htm"]',
    transfFundsLink: 'a[href="/parabank/transfer.htm"]',
    billPayLink: 'a[href="/parabank/billpay.htm"]',
    findTransactionLink: 'a[href="/parabank/findtrans.htm"]',
    updateContInfoLink: 'a[href="/parabank/updateprofile.htm"]',
    requestLoanLink: 'a[href="/parabank/requestloan.htm"]',
    logOutBtn: 'a[href="/parabank/logout.htm"]'
}

const expected = {
    smallText: `Welcome ${Cypress.env().FIRST_NAME} ${Cypress.env().LAST_NAME}`,
    openNewAccTxt: 'Open New Account',
    accOverviewTxt: 'Accounts Overview',
    transfFundsTxt: 'Transfer Funds',
    billPayTxt: 'Bill Pay',
    findTransactionTxt: 'Find Transactions',
    updateContInfoTxt: 'Update Contact Info',
    requestLoanTxt: 'Request Loan',
    logOutBtnTxt: 'Log Out'

}

const LogOut = () => {
    cy.get(selectors.logOutBtn).click();
  }
const LogInCheck = () => {
    if(cy.get(selectors.logOutBtn)){
        cy.get(selectors.logOutBtn).click();
    }
}

export default {
    ...selectors,
    expected,
    LogOut,
    LogInCheck
}