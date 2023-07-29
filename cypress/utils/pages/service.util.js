const selectors = {

}

const expected = {
    servicePageLink: '/services.htm',
}

const functions = {
    openPage: () => { cy.visit(expected.servicePageLink); }
}

export default {
    ...selectors,
    expected,
    functions
}