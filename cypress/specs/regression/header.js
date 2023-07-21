import Header from '../../utils/elements/header.util'

describe('Elements', () => {
    before(() => cy.visit('/'));

    describe('Each element are displayed', () => {
      it('Main panel is displayed', () => {
        cy.get(Header.mainPanel).should('be.visible');
      })
      it('Top panel is displayed', () => {
        cy.get(Header.topPanel).should('be.visible');
      })
      it('Header panel is displayed', () => {
        cy.get(Header.headerPanel).should('be.visible');
      })
      it('Body panel is displayed', () => {
        cy.get(Header.bodyPanel).should('be.visible');
      })
      it('Logo is displayed', () => {
        cy.get(Header.logo).should('be.visible');
        cy.get(Header.logo).should('have.attr', 'src', Header.expected.logo);
      })
      it('Bank logo is displayed', () => {
        cy.get(Header.bankLogo).should('be.visible');
        cy.get(Header.bankLogo).should('have.attr', 'src', Header.expected.bankLogo);
      })
      it('Slogan is displayed', () => {
        cy.get(Header.slogan).should('contain.text', Header.expected.slogan)
          .and('be.visible');
      })
      it('Link 1 is displayed', () => {
        cy.get(Header.link1).should('contain.text', Header.expected.link1Text)
          .and('be.visible');
      })
      it('Link 2 is displayed', () => {
        cy.get(Header.link2).should('contain.text', Header.expected.link2Text)
          .and('be.visible');
      })
      it('Link 3 is displayed', () => {
        cy.get(Header.link3).should('contain.text', Header.expected.link3Text)
          .and('be.visible');
      })
      it('Link 4 is displayed', () => {
        cy.get(Header.link4).should('contain.text', Header.expected.link4Text)
          .and('be.visible');
      })
      it('Link 5 is displayed', () => {
        cy.get(Header.link5).should('contain.text', Header.expected.link5Text)
          .and('be.visible');
      })
      it('Link 6 is displayed', () => {
        cy.get(Header.link6).should('contain.text', Header.expected.link6Text)
          .and('be.visible');
      })
      it('Button "Home" is displayed', () => {
        cy.get(Header.btnHome).should('be.visible');
      })
      it('Button "About" is displayed', () => {
        cy.get(Header.btnAbout).should('be.visible');
      })
      it('Button "Contact" is displayed', () => {
        cy.get(Header.btnContact).should('be.visible');
      })

    })
});

describe('Functionality', () => {
    it('Button "Contact" is displayed', () => {
      cy.get(Header.btnContact).should('be.visible');
    })

});