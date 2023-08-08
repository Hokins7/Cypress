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
    it('Products link is displayed and has correct text', () => {
        cy.get(Footer.productsLink)
            .should('have.text', Header.expected.link4Text)
            .and('be.visible');
    })
    it('Location link is displayed and has correct text', () => {
        cy.get(Footer.locationLink)
            .should('have.text', Header.expected.link5Text)
            .and('be.visible');
    })
    it('Site Map link is displayed and has correct text', () => {
        cy.get(Footer.sitemapLink)
            .should('have.text', Footer.expected.sitemapLinkTxt)
            .and('be.visible');
    })
    it('Forum link is displayed and has correct text', () => {
        cy.get(Footer.forumLink)
            .should('have.text', Footer.expected.forumLinkTxr)
            .and('be.visible');
    })
    it('HomeLink is displayed and has correct text', () => {
        cy.get(Footer.contactsLink)
            .should('have.text', Contacts.expected.contactUsTxt)
            .and('be.visible');
    })

})

describe('Functionality', () => {
    before(() => cy.visit('/'));

    it('About Us link is working and redirecting to the About Us page', () => {
        cy.get(Footer.aboutLink).click();
        cy.url().should('include', Footer.expected.aboutLink);
        cy.go('back');
    })
    it('Services link is working and redirecting to the Services page', () => {
        cy.get(Footer.serviceLink).click();
        cy.url().should('include', Footer.expected.serviceLink);
        cy.go('back');
    })
    it('Products link is working and redirecting to the Products page', () => {
        cy.get(Footer.productsLink).click();
        cy.url().should('include', Footer.expected.productsLink);
        cy.go('back');
    })
    it('Location link is working and redirecting to the Location page', () => {
        cy.get(Footer.locationLink).click();
        cy.url().should('include', Footer.expected.locationLink);
        cy.go('back');
    })
    it('Site link is working and redirecting to the Site page', () => {
        cy.get(Footer.sitemapLink).click();
        cy.url().should('include', Footer.expected.sitemapLink);
        cy.go('back');
    })
    it('Contact link is working and redirecting to the Contact page', () => {
        cy.get(Footer.contactsLink).click();
        cy.url().should('include', Contacts.expected.contactsLink);
    })
    it('Home link is working and redirecting to the Home page', () => {
        cy.get(Footer.homeLink).click();
        cy.url().should('include', Footer.expected.homeLink);
    })
})