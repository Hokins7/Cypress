// selectors
const selectors = {
    footer: '#footerPanel',
    copyright: '.copyright',
    devLink: '#footerPanel > .visit',
    homeLink: '#footerPanel > ul > li[href*="index"]',
    aboutLink: '#footerPanel > ul > li[href*="about"]',
    serviceLink: '#footerPanel > ul > li[href*="services"]',
    productsLink: '#footerPanel > ul > li[href*="products"]',
    locationLink: '#footerPanel > ul > li[href*="contacts"]',
    forumLink: '#footerPanel > ul > li[href*="forum"]',
    sitemapLink: '#footerPanel > ul > li[href*="sitemap"]',
    contactsLink: '#footerPanel > ul > li[href="contact.html"]'
}

// expected results
const expected = {
    copyrightText: '© Parasoft. All rights reserved.',
    devLinkText: 'Visit us at: www.parasoft.com',
    homeLink: '/parabank/index.htm',
    aboutLink: 'about.html',
    serviceLink: 'services.htm',
    productsLink: '/products.jsp',
    locationLink: '/contacts.jsp',
    forumLink: 'http://forums.parasoft.com/',
    sitemapLink: '/parabank/sitemap.htm',
    contactsLink: 'contact.htm'

}

export default {
...selectors,
expected
}