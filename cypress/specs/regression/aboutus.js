import AboutUs from '../../utils/pages/aboutus.util'

describe('Elements', () => {
    before(() => cy.visit(AboutUs.expected.aboutUsLink));

    it('Title is displayed', () => {
        cy.get(AboutUs.title)
            .should('have.text' , AboutUs.expected.titleTxt)
            .and('be.visible');
    })
    it('First paragraph is displayed', () => {
        cy.get(AboutUs.firstParagraph)
            .contains(AboutUs.expected.firstParagraphTxt)
            .and('be.visible');
    })
    it('Second paragraph is displayed', () => {
        cy.get(AboutUs.secParagraph)
            .contains(AboutUs.expected.secParagraphTxt)
            .and('be.visible');
    })
    it('Third paragraph is displayed', () => {
        cy.get(AboutUs.thrdParagraph)
            .contains( AboutUs.expected.thrdParagraphTxt)
            .and('be.visible');
    })
})

describe('Functionality', () => {
    it('Parasoft link redirect to parasoft site', () => {
        cy.get(AboutUs.paraLink).invoke('removeAttr', 'target').click();
        cy.url().should('include', AboutUs.expected.parasoftLink);
        cy.go('back');
    })
})