import Header from '../../utils/elements/header.util'
import Main from '../../utils/pages/main_page.util'
import AboutUs from '../../utils/pages/aboutus.util'

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
    it('Left logo image redirect to admin page', () => {
        cy.get(Header.logo).click();
        cy.url().should('include', 'parabank/admin.htm');
    })

    it('Right logo image redirect to main page', () => {
      cy.get(Header.bankLogo).click();
      cy.url().should('include', Main.expected.mainPageLink);
    })
    it('AboutUs link redirect to aboutUs page', () => {
      cy.get(Header.link2).click();
      cy.url().should('include', AboutUs.expected.aboutUsLink)
      cy.go('back');
    })
    it('Services link redirect to services page', () => {
      cy.get(Header.link3).click();
      cy.url().should('include', '/services.htm');
      cy.go('back');
    })
    it('Products link redirect to product page', () => {
      cy.get(Header.link4).click();
      cy.url().should('include', 'products/');
      cy.go('back');
    })
    it('Location link redirect to location page', () => {
      cy.get(Header.link5).click();
      cy.url().should('include', 'solutions/');
      cy.go('back');
    })
    it('Admin Page link redirect to admin page', () => {
      cy.get(Header.link6).click();
      cy.url().should('include', '/admin.htm');
      cy.go('back');
    })

});