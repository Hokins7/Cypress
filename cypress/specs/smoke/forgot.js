import Forgot from '../../utils/pages/forgot.util'
import MainPage from '../../utils/pages/main_page.util'

describe ('Elements', () => {

    before(() => cy.visit(Forgot.expected.link));

    it('Main panel is displayed', () => {
        cy.get(MainPage.rightPanel).should('be.visible');
    })
    it('Tittle is visible and has correct text', () => {
        cy.get(Forgot.tittle)
            .should('have.text', Forgot.expected.tittle)
            .and('be.visible');
    })
    it('Subtittle is visible and has correct text', () => {
        cy.get(Forgot.subTittle)
            .should('have.text', Forgot.expected.subTittle)
            .and('be.visible');
    })

})