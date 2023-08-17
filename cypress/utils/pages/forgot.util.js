const selectors = {
    tittle: () => `${selectors.rightPanel} > .title`,
    subTittle: () => `${selectors.rightPanel} > p`,
    forgotForm: '#lookupForm',
    firstNameTxt: '#lookupForm > table > tbody > tr:nth-child(1) > td:nth-child(1) > b',
    firstNameFrm: '#firstName',
    lastNameTxt: '#lookupForm > table > tbody > tr:nth-child(2) > td:nth-child(1) > b',
    lastNameFrm: '#lastName',
    addressStrTxt: '#lookupForm > table > tbody > tr:nth-child(3) > td:nth-child(1) > b',
    addressStrFrm: '#address.street',
    addressCityTxt: '#lookupForm > table > tbody > tr:nth-child(4) > td:nth-child(1) > b',
    addressCityFrm: '#address.city',
    addressStateTxt: '#lookupForm > table > tbody > tr:nth-child(5) > td:nth-child(1) > b',
    addressStateFrm: '#address.state',
    zipCodeTxt: '#lookupForm > table > tbody > tr:nth-child(6) > td:nth-child(1) > b',
    zipCodeFrm:'#address.zipCode',
    ssnTxt: '#lookupForm > table > tbody > tr:nth-child(7) > td:nth-child(1) > b',
    ssnFrm: '#ssn',
    submitBtn: 'input[value="Find My Login Info"]'

}