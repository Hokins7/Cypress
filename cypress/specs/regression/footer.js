import Footer from '../../utils/elements/footer.util'

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
})