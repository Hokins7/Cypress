// selectors
const selectors = {
    footer: '#footerPanel',
    copyright: '.copyright',
    devLink: '#footerPanel > .visit',
    homeLink: '#footerPanel > ul > li > a[href*="index"]',
    aboutLink: '#footerPanel > ul > li > a[href*="about"]',
    serviceLink: '#footerPanel > ul > li > a[href*="services"]',
    productsLink: '#footerPanel > ul > li > a[href*="products"]',
    locationLink: '#footerPanel > ul > li > a[href*="contacts"]',
    forumLink: '#footerPanel > ul > li > a[href*="forum"]',
    sitemapLink: '#footerPanel > ul > li > a[href*="sitemap"]',
    contactsLink: '#footerPanel > ul > li > a[href*="contact.htm"]'
}

// expected results
const expected = {
    copyrightText: '© Parasoft. All rights reserved.',
    devLinkText: 'Visit us at: www.parasoft.com',
    homeLink: '/parabank/index.htm',
    homeLinkTxt: 'Home',
    aboutLink: 'about.html',
    serviceLink: 'services.htm',
    productsLink: '/products.jsp',
    locationLink: '/solutions/',
    forumLink: 'http://forums.parasoft.com/',
    forumLinkTxr: 'Forum',
    sitemapLink: '/parabank/sitemap.htm',
    sitemapLinkTxt: 'Site Map',
    contactsLink: 'contact.htm'

}

export default {
...selectors,
expected
}