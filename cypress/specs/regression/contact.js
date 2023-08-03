import Contacts from '../../utils/pages/contact.util'

describe('Elements', () => {
    before(() => cy.visit(Contacts.expected.contactsLink));

    it('Right panel is displayed', () => {
        cy.get(Contacts.rightPanel).should('be.visible');
    })
    it('Tittle is displayed', () => {
        cy.get(Contacts.tittle)
            .should('have.text', Contacts.expected.tittleTxt)
            .and('be.visible');
    })
    it('SubTittle is displayed', () => {
        cy.get(Contacts.subTittle)
            .should('have.text', Contacts.expected.subTittleTxt)
            .and('be.visible');
    })
    it('Form is displayed', () => {
        cy.get(Contacts.form).should('be.visible');
    })

})