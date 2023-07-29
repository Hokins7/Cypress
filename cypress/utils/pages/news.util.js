const selectors = {

}

const expected = {
    newsPageLink: '/news.htm',
}

const functions = {
    openPage: () => { cy.visit(expected.newsPageLink); }
}

export default {
    ...selectors,
    expected,
    functions
}