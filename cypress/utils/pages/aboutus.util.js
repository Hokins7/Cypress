const selectors = {
    title: '#rightPanel > .title',
    firstParagraph: '#rightPanel > p:nth-child(2)',
    secParagraph: '#rightPanel > p:nth-child(3)',
    thrdParagraph: '#rightPanel > p:nth-child(4)',
}

const expected = {
    titleTxt: 'ParaSoft Demo Website',
    firstParagraphTxt: 'ParaBank is a demo site used for demonstration of Parasoft software solutions. All materials herein are used solely for simulating a realistic online banking website.',
    secParagraphTxt: 'In other words: ParaBank is not a real bank!',
    thrdParagraphTxt: 'For more information about Parasoft solutions please visit us at: www.parasoft.com or call 888-305-0041',
    aboutUsLink: 'parabank/about.htm'
}

export default {
    ...selectors,
    expected
}