const selectors = {
    rightPanel: '#rightPanel',
    tittle: () => `${selectors.rightPanel} > .title`,
    subTittle: () => `${selectors.rightPanel} > p`,
    form: '.form2',
    inputName: '#name',
    inputEmail: '#email',
    inputPhone: '#phone',
    inputMessage: '#message',
    nameLabel: 'td[align="right"] > b:nth-child(1)',
    emailLabel: 'td[align="right"] > b:nth-child(2)',
    phoneLabel: 'td[align="right"] > b:nth-child(3)',
    messageLabel: 'td[align="right"] > b:nth-child(4)',
    sendBtn: 'input[type="submit"]:nth-child(1)'
}

const expected = {
    tittleTxt: 'Customer Care',
    subTittleTxt: 'Email support is available by filling out the following form.',
    nameTxt: 'Name:',
    emailTxt: 'Email:',
    phoneTxt: 'Phone:',
    messageTxt: 'Message:',
    sendBtnTxt: 'Send to Customer Care'
}

export default {
    ...selectors,
    expected
}