import Footer from '../../utils/elements/footer.util'
import Header from '../../utils/elements/header.util'
import Contacts from '../../utils/pages/contact.util'

describe('Elements', () => {
    before(() => cy.visit('/'));

    it('Footer is displayed', () => {
        cy.get(Footer.footer).should('be.visible');
    })
    it('Copyright is displayed and has correct text', () => {
        cy.get(Footer.copyright)
            .contains(Footer.expected.copyrightText)
            .and('be.visible');
    })
    it('DevLink is displayed and has correct text', () => {
        cy.get(Footer.devLink)
            .contains(Footer.expected.devLinkText)
            .and('be.visible');
    })
    it('HomeLink is displayed and has correct text', () => {
        cy.get(Footer.homeLink)
            .should('have.text', Footer.expected.homeLinkTxt)
            .and('be.visible');
    })
    it('About Us link is displayed and has correct text', () => {
        cy.get(Footer.aboutLink)
            .should('have.text', Header.expected.link2Text)
            .and('be.visible');
    })
    it('Service link is displayed and has correct text', () => {
        cy.get(Footer.serviceLink)
            .should('have.text', Header.expected.link3Text)
            .and('be.visible');
    })
    it('Products is displayed and has correct text', () => {
        cy.get(Footer.productsLink)
            .should('have.text', Header.expected.link4Text)
            .and('be.visible');
    })
    it('HomeLink is displayed and has correct text', () => {
       
    })
})