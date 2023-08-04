import Contacts from '../../utils/pages/contact.util'
import SingUp from '../../utils/pages/singup.util'

describe('Elements', () => {
    before(() => cy.visit(Contacts.expected.contactsLink));

    it('Right panel is displayed', () => {
        cy.get(Contacts.rightPanel).should('be.visible');
    })
    it('Tittle is displayed', () => {
        cy.get(Contacts.tittle())
            .should('have.text', Contacts.expected.tittleTxt)
            .and('be.visible');
    })
    it('SubTittle is displayed', () => {
        cy.get(Contacts.subTittle())
            .should('have.text', Contacts.expected.subTittleTxt)
            .and('be.visible');
    })
    it('Form is displayed', () => {
        cy.get(Contacts.form).should('be.visible');
    })
    it('Input name and label is displayed', () => {
        cy.get(Contacts.inputName).should('be.visible');
        cy.get(Contacts.nameLabel)
            .should('have.text', Contacts.expected.nameTxt)
            .and('be.visible');
    })
    it('Input email and label is displayed', () => {
        cy.get(Contacts.inputEmail).should('be.visible');
        cy.get(Contacts.emailLabel)
            .should('have.text', Contacts.expected.emailTxt)
            .and('be.visible');
    })
    it('Input phone and label is displayed', () => {
        cy.get(Contacts.inputPhone).should('be.visible');
        cy.get(Contacts.phoneLabel)
            .should('have.text', Contacts.expected.phoneTxt)
            .and('be.visible')
    })
    it('Input message and label is displayed', () => {
        cy.get(Contacts.inputMessage).should('be.visible');
        cy.get(Contacts.messageLabel)
            .should('have.text', Contacts.expected.messageTxt)
            .and('be.visible');
    })
    it('Submit button and label is displayeed', () => {
        cy.get(Contacts.sendBtn).last()
            .should('have.attr', 'value', Contacts.expected.sendBtnTxt)
            .and('be.visible');
    })

})

describe('Functionality', () => {
    it('Form accepting and sending information', () => {
        cy.get(Contacts.inputName).type(SingUp.expected.firstNameAcc);
        cy.get(Contacts.inputEmail).type(Contacts.expected.email);
        cy.get(Contacts.inputPhone).type(SingUp.expected.phoneNumberAcc);
        cy.get(Contacts.inputMessage).type(Contacts.expected.message);
        cy.get(Contacts.sendBtn).last().click();
        cy.get(Contacts.subTittle()).first()
            .contains(Contacts.expected.apearTxt)
            .and('be.visible');
        cy.get(Contacts.subTittle()).last()
            .contains(Contacts.expected.apearMsg)
            .and('be.visible')
    })
})
