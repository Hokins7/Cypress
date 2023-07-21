// selectors
const selectors = {
    footer: '.page-footer',
    writeForUsLnk: 'body > div.page-wrapper > footer > div > div.links > div > ul > li > a',
    navItems: '.nav item',
    subscSection: '#newsletter-validate-detail',
    emailField: '#newsletter',
    subscButton: button[tittle='subscribe']
}

// expected results
const expected = {
writeForUs: 'Write for us',
navItem1: 'Search Terms',
navItem2: 'Privacy and Cookie Policy',
navItem3: 'Advanced Search',
navItem4: 'Orders and Returns',
navItem5: 'Contact Us', 
emailFieldPlchold: 'Enter your email address',
subscBtnText: 'Subscribe'

}

export default {
...selectors,
expected
}