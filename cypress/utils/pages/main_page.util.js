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
    readMoreFirstLink: '.more > a[href="services.htm"] ',
    latestNewsImg: () => `${selectors.rightPanel} > h4`,
    eventsList: '.events',
    date: '.captionthree',
    eventFirst: () => `${selectors.eventsList} > li:nth-child(2)`,
    eventSecond: () => `${selectors.eventsList} > li:nth-child(3)`,
    eventThird: () => `${selectors.eventsList} > li:nth-child(4)`,
    readMoreSecondLink: 'a[href="news.htm"]'
};

const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());
    return `${month}/${day}/${year}`;
  }

const expected = {
    atmServicesTxt: 'ATM Services',
    atmFirstServTxt: 'Withdraw Funds',
    atmSecondServTxt: 'Transfer Funds',
    atmThirdServTxt: 'Check Balances',
    atmFourServTxt: 'Make Deposits',
    onlineServicesTxt: 'Online Services',
    onlineFirstServTxt: 'Bill Pay',
    onlinesSecondServTxt: 'Account History',
    onlineThirdServTxt: 'Transfer Funds',
    date: getCurrentDate(),
    eventFirstTxt: 'ParaBank Is Now Re-Opened',
    eventSecondTxt: 'New! Online Bill Pay',
    eventThirdTxt: 'New! Online Account Transfers',
    readMoreTxt: 'Read More',
    atmServiceRedirect: '/ParaBank?wsdl',
    onlineServiceRedirect: '/bank?_wadl&_type=xml'
}


export default {
    ...selectors,
    expected,
    
}