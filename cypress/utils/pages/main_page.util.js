const selectors = {
    rightPanel: '#rightPanel',
    servicesImg: 'span[class="services"]',
    atmServices: 'ul[class="services"]',
    onlineServices: '.servicestwo',
    atmServicesTxt: '.captionone',
    atmFirstServ: `${atmServices} > li:nth-child(2)`,
    atmSecondServ: `${atmServices} > li:nth-child(3)`,
    atmThirdServ: `${atmServices} > li:nth-child(4)`,
    atmFourServ: `${atmServices} > li:nth-child(5)`,
    onlineServicesTxt: '.captiontwo',
    onlineFirstServ: `${onlineServices} > li:nth-child(2)`,
    onlineSecondServ: `${onlineServices} > li:nth-child(3)`,
    onlineThirdServ: `${onlineServices} > li:nth-child(4)`,
    readMoreFirstLink: 'a[href="services.htm"]',
    latestNewsImg: `${rightPanel} > h4`,
    eventsList: '.events',
    date: '.captionethree',
    eventFirst: `${eventsList} > li:nth-child(2)`,
    eventSecond: `${eventsList} > li:nth-child(3)`,
    eventThird: `${eventsList} > li:nth-child(4)`,
    readMoreSecondLink: 'a[href="news.htm"]'
}

const expected = {
    servicesImg: 'images/atmhand.jpg',
    atmServicesTxt: 'ATM Services',
    atmFirstServTxt: 'Withdraw Funds',
    atmSecondServTxt: 'Transfer Funds',
    atmThirdServTxt: 'Check Balances',
    atmFourServTxt: 'Make Deposits',
    onlineServicesTxt: 'Online Services',
    onlineFirstServTxt: 'Bill Pay',
    onlineThirdServTxt: 'Account History',
    onlineFourServTxt: 'Transfer Funds',
    latestNewsImg: 'images/icon4.jpg',
    date: new Date().toLocaleDateString(),
    eventFirstTxt: 'ParaBank Is Now Re-Opened',
    eventSecondTxt: 'New! Online Bill Pay',
    eventThirdTxt: 'New! Online Account Transfers',
    readMoreTxt: 'Read More',
}

export default {
    ...selectors,
    expected
}