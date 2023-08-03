const selectors = {
    rightPanel: '#rightPanel',
    tittle: () => `${selectors.rightPanel} > .title`,
    subTittle: () => `${selectors.rightPanel} > p`,
    form: '.form2',
    inputName: '#name',
    inputEmail: '#email',
    inputPhone: '#phone',
    inputMessage: '#message',
    nameLabel: 'tr:nth-child(1) > td:nth-child(1) > b ',
    emailLabel: 'tr:nth-child(2) > td:nth-child(1) > b ',
    phoneLabel: 'tr:nth-child(3) > td:nth-child(1) > b ',
    messageLabel: 'tr:nth-child(4) > td:nth-child(1) > b ',
    sendBtn: 'input[type="submit"]'
}

const expected = {
    tittleTxt: 'Customer Care',
    subTittleTxt: 'Email support is available by filling out the following form.',
    nameTxt: 'Name:',
    emailTxt: 'Email:',
    phoneTxt: 'Phone:',
    messageTxt: 'Message:',
    sendBtnTxt: 'Send to Customer Care',
    contactsLink: '/parabank/contact.htm'
}

export default {
    ...selectors,
    expected
}