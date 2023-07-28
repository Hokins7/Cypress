const selectors = {
    rightPanel: '#rightPanel',
    servicesImg: 'span[class="services"]',
    atmServices: 'ul[class="services"]',
    onlineServices: '.servicestwo',
    atmServicesTxt: '.captionone',
    atmFirstServ: () => `${selectors.atmServices} > li:nth-child(2)`,
    atmSecondServ: () => `${selectors.atmServices} > li:nth-child(3)`,
    atmThirdServ: () => `${selectors.atmServices} > li:nth-child(4)`,
    atmFourServ: () => `${selectors.atmServices} > li:nth-child(5)`,
    onlineServicesTxt: '.captiontwo',
    onlineFirstServ: () => `${selectors.onlineServices} > li:nth-child(2)`,
    onlineSecondServ: () => `${selectors.onlineServices} > li:nth-child(3)`,
    onlineThirdServ: () => `${selectors.onlineServices} > li:nth-child(4)`,
    readMoreFirstLink: 'a[href="services.htm"]',
    latestNewsImg: () => `${selectors.rightPanel} > h4`,
    eventsList: '.events',
    date: '.captionethree',
    eventFirst: () => `${selectors.eventsList} > li:nth-child(2)`,
    eventSecond: () => `${selectors.eventsList} > li:nth-child(3)`,
    eventThird: () => `${selectors.eventsList} > li:nth-child(4)`,
    readMoreSecondLink: 'a[href="news.htm"]'
};

const expected = {
    atmServicesTxt: 'ATM Services',
    atmFirstServTxt: 'Withdraw Funds',
    atmSecondServTxt: 'Transfer Funds',
    atmThirdServTxt: 'Check Balances',
    atmFourServTxt: 'Make Deposits',
    onlineServicesTxt: 'Online Services',
    onlineFirstServTxt: 'Bill Pay',
    onlineThirdServTxt: 'Account History',
    onlineFourServTxt: 'Transfer Funds',
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