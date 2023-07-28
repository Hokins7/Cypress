import MainPage from '../../utils/pages/main_page.util'

describe('Elements', () => {
    before(() => cy.visit('/'));

    describe('All elements are displayed and has correct text', () => {
        it('Main panel is displayed', () => {
            cy.get(MainPage.rightPanel).should('be.visible');
          })
        it('Services image is displayed', () => {
            cy.get(MainPage.servicesImg).should('be.visible');
        })
        it('ATM services header is displayed', () => {
            cy.get(MainPage.atmServices).should('be.visible');
        })
        it('Online services image is displayed', () => {
            
        })
    })
})