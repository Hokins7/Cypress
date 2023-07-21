// selectors
const selectors = {
    header: '.page-header',
    greeatMsg: '.greet welcome',
    singInLink: '.authorization-link',
    createAccLink: '/html/body/div[1]/header/div[1]/div/ul/li[3]/a',
    logoImg: '.logo',
    navSection: '.sections nav-sections',
    searchSection: '#search',
    shopIcon: '.action showcart'
}

//expected result
const expected = {
    greeatText: 'Default welcome msg!',
    singInText: 'Sign In',
    createAccText: 'Create an Account',
    navLink1: "What's New",
    navLink2: "Woman",
    navLink3: "Man",
    navLink4: "Gear",
    navLink5: "Training",
    navLink6: "Sale",
}

export default {
...selectors,
expected
}