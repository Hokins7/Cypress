// selectors
const selectors = {
    mainPanel: '#mainPanel',
    topPanel: '#topPanel',
    headerPanel: '#headerPanel',
    bodyPanel: '#bodyPanel',
    logo: '.admin',
    bankLogo: '.logo',
    slogan: 'p[class="caption"]',
    link1: 'li[class="Solutions"]',
    link2: '.leftmenu > li > a[href*="about"]', 
    link3: '.leftmenu > li > a[href*="services"]',
    link4: '.leftmenu > li > a[href*="products"]',
    link5: '.leftmenu > li > a[href*="contacts"]',
    link6: '.leftmenu > li > a[href*="admin"]',
    btnHome: '.button > li[class="home"]',
    btnAbout: '.button > li[class="aboutus"]',
    btnContact: '.button > li[class="contact"]',
}

//expected result
const expected = {
   logo: '/parabank/images/clear.gif',
   bankLogo: '/parabank/images/logo.gif',
   link1Text: 'Solution',
   link2Text: 'About Us',
   link3Text: 'Services',
   link4Text: 'Products',
   link5Text: 'Locations',
   link6Text: 'Admin Page',
   slogan: 'Experience the difference',
}

export default {
...selectors,
expected
}