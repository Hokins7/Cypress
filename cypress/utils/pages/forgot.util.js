const selectors = {
    tittle: `#rightPanel > .title`,
    subTittle: `#rightPanel > p`,
    forgotForm: '#lookupForm',
    firstNameTxt: '#lookupForm > table > tbody > tr:nth-child(1) > td:nth-child(1) > b',
    firstNameFrm: '#firstName',
    lastNameTxt: '#lookupForm > table > tbody > tr:nth-child(2) > td:nth-child(1) > b',
    lastNameFrm: '#lastName',
    addressStrTxt: '#lookupForm > table > tbody > tr:nth-child(3) > td:nth-child(1) > b',
    addressStrFrm: "#address\\.street",
    addressCityTxt: '#lookupForm > table > tbody > tr:nth-child(4) > td:nth-child(1) > b',
    addressCityFrm: '#address\\.city',
    addressStateTxt: '#lookupForm > table > tbody > tr:nth-child(5) > td:nth-child(1) > b',
    addressStateFrm: '#address\\.state',
    zipCodeTxt: '#lookupForm > table > tbody > tr:nth-child(6) > td:nth-child(1) > b',
    zipCodeFrm:'#address\\.zipCode',
    ssnTxt: '#lookupForm > table > tbody > tr:nth-child(7) > td:nth-child(1) > b',
    ssnFrm: '#ssn',
    submitBtn: 'input[value="Find My Login Info"]',
    firstNameErr: '#firstName\\.errors',
    lastNameErr: '#lastName\\.errors',
    addressStrErr: '#address\\.street\\.errors',
    addressCityErr: '#address\\.city\\.errors',
    addressStateErr: '#address\\.state\\.errors',
    zipCodeErr: '#address\\.zipCode\\.errors',
    ssnErr: '#ssn.errors'

}

const expected = {
    link: '/parabank/lookup.htm',
    tittle: 'Customer Lookup',
    subTittle: 'Please fill out the following information in order to validate your account.',
    firstNameTxt: 'First Name:',
    lastNameTxt: 'Last Name:',
    addressStrTxt: 'Address:',
    addressCityTxt: 'City:',
    addressStateTxt: 'State:',
    zipCodeTxt: 'Zip Code:',
    ssnTxt: 'SSN:',
    submitBtn: 'Find My Login Info',
    correctSubtittle: 'Your login information was located successfully. You are now logged in. ',
    username: 'Username',
    password: 'Password',
    firstNameErrTxt: 'First name is required.',
    lastNameErrTxt: 'Last name is required.',
    addressStrErrTxt: 'Address is required.',
    addressCityErrTxt: 'City is required.',
    addressCityErrTxt: 'State is required.',
    addressStateErrTxt: 'Zip Code is required.',
    zipCodeErrTxt: 'Zip Code is required.',
    ssnErrTxt: 'Social Security Number is required.'

}

export default {
    ...selectors,
    expected
}