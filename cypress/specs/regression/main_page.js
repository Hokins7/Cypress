import MainPage from '../../utils/pages/main_page.util'
import Service from '../../utils/pages/service'
import News from '../../utils/pages/news'

describe('Elements', () => {
    before(() => cy.visit('/'));

    describe('All elements are displayed and has correct text', () => {
        it('Main panel is displayed', () => {
            cy.get(MainPage.rightPanel).should('be.visible');
          })
        it('Services image is displayed', () => {
            cy.get(MainPage.servicesImg).should('be.visible');
        })
        it('ATM services is displayed', () => {
            cy.get(MainPage.atmServices).should('be.visible');
        })
        it('Online services is displayed', () => {
            cy.get(MainPage.onlineServices).should('be.visible');
        })
        it('ATM Services text is displayed', () => {
            cy.get(MainPage.atmServicesTxt)
                .should('have.text', MainPage.expected.atmServicesTxt)
                .and('be.visible');
        })
        it('ATM first text is displayed', () => {
            cy.get(MainPage.atmFirstServ())
                .should('have.text', MainPage.expected.atmFirstServTxt)
                .and('be.visible');
        })
        it('ATM second text is displayed', () => {
            cy.get(MainPage.atmSecondServ())
                .should('have.text', MainPage.expected.atmSecondServTxt)
                .and('be.visible');
        })
        it('ATM third text is displayed', () => {
            cy.get(MainPage.atmThirdServ())
                .should('have.text', MainPage.expected.atmThirdServTxt)
                .and('be.visible');
        })
        it('ATM four text is displayed', () => {
            cy.get(MainPage.atmFourServ())
                .should('have.text', MainPage.expected.atmFourServTxt)
                .and('be.visible');
        })
        it('Online services heading is displayed', () => {
            cy.get(MainPage.onlineServicesTxt)
                .should('have.text', MainPage.expected.onlineServicesTxt)
                .and('be.visible');
        })
        it('Online first text is displayed', () => {
            cy.get(MainPage.onlineFirstServ())
                .should('have.text', MainPage.expected.onlineFirstServTxt)
                .and('be.visible');
        })
        it('Online second text is displayed', () => {
            cy.get(MainPage.onlineSecondServ())
                .should('have.text', MainPage.expected.onlinesSecondServTxt)
                .and('be.visible');
        })
        it('Online third text is displayed', () => {
            cy.get(MainPage.onlineThirdServ())
                .should('have.text', MainPage.expected.onlineThirdServTxt)
                .and('be.visible');
        })
        it('"Read more" first link is displayed', () => {
            cy.get(MainPage.readMoreFirstLink)
            .should('have.text', MainPage.expected.readMoreTxt)
            .and('be.visible')
        })
        it('"Latest news" image is displayed', () => {
            cy.get(MainPage.latestNewsImg()).should('be.visible');
        })
        it('News list is displayed', () => {
            cy.get(MainPage.eventsList).should('be.visible');
        })
        it('Date is displayed', () => {
            cy.get(MainPage.date)
                .should('have.text', MainPage.expected.date)
                .and('be.visible');
        })
        it('First news is displayed', () => {
            cy.get(MainPage.eventFirst())
                .should('have.text', MainPage.expected.eventFirstTxt)
                .and('be.visible');
        })
        it('Second news is displayed', () => {
            cy.get(MainPage.eventSecond())
                .should('have.text', MainPage.expected.eventSecondTxt)
                .and('be.visible');
        })
        it('Third news is displayed', () => {
            cy.get(MainPage.eventThird())
                .should('have.text', MainPage.expected.eventThirdTxt)
                .and('be.visible');
        })
        it('"Read more" second link is displayed', () => {
            cy.get(MainPage.readMoreSecondLink)
            .should('have.text', MainPage.expected.readMoreTxt)
            .and('be.visible')
        })
    })
})

describe('Functionality', () => {
    it('ATM service first link redirect correctly', () => {
        cy.get(MainPage.atmFirstServ()).click();
        cy.url().should('include', MainPage.expected.atmServiceRedirect);
        cy.go('back');
    })
    it('ATM service second link redirect correctly', () => {
        cy.get(MainPage.atmSecondServ()).click();
        cy.url().should('include', MainPage.expected.atmServiceRedirect);
        cy.go('back');
    })
    it('ATM service third link redirect correctly', () => {
        cy.get(MainPage.atmThirdServ()).click();
        cy.url().should('include', MainPage.expected.atmServiceRedirect);
        cy.go('back');
    })
    it('ATM service four link redirect correctly', () => {
        cy.get(MainPage.atmFourServ()).click();
        cy.url().should('include', MainPage.expected.atmServiceRedirect);
        cy.go('back');
    })
    it('Online service first link redirect correctly', () => {
        cy.get(MainPage.onlineFirstServ()).click();
        cy.url().should('include', MainPage.expected.onlineServiceRedirect);
        cy.go('back');
    })
    it('Online service second link redirect correctly', () => {
        cy.get(MainPage.onlineSecondServ()).click();
        cy.url().should('include', MainPage.expected.onlineServiceRedirect);
        cy.go('back');
    })
    it('Online service third link redirect correctly', () => {
        cy.get(MainPage.onlineThirdServ()).click();
        cy.url().should('include', MainPage.expected.onlineServiceRedirect);
        cy.go('back');
    })
    it('First "Read more" link redirect correctly', () => {
        cy.get(MainPage.readMoreFirstLink).click();
        cy.url().should('include', Service.expected.servicePageLink);
        cy.go('back');
    })
    it('First news link redirect correctly', () => {
        cy.get(MainPage.eventFirst()).click();
        cy.url().should('include', News.expected.newsPageLink);
        cy.go('back');
    })
    it('Second news link redirect correctly', () => {
        cy.get(MainPage.eventSecond()).click();
        cy.url().should('include', News.expected.newsPageLink);
        cy.go('back');
    })
    it('Third news link redirect correctly', () => {
        cy.get(MainPage.eventThird()).click();
        cy.url().should('include', News.expected.newsPageLink);
        cy.go('back');
    })
    it('Second "Read more" link redirect correctly', () => {
        cy.get(MainPage.readMoreSecondLink).click();
        cy.url().should('include', News.expected.newsPageLink);
        cy.go('back');
    })
})