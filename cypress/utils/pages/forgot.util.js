const selectors = {
    tittle: () => `${selectors.rightPanel} > .title`,
    subTittle: () => `${selectors.rightPanel} > p`,
    forgotForm: '#lookupForm',
    firstNameTxt: '#lookupForm > table > tbody > tr:nth-child(1) > td:nth-child(1) > b',
    firstNameFrm: '#firstName',
    lastNameTxt: '',
    lastNameFrm: ''
}