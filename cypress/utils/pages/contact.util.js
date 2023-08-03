const selectors = {
    rightPanel: '#rightPanel',
    tittle: () => `${selectors.rightPanel} > .title`,
    subTittle: () => `${selectors.rightPanel} > p`,
    form: '.form2',
    inputName: '#name',
    inputEmail: '#email',
    inputPhone: '#phone',
    inputMessage: '#message',
    
}

const expected = {

}

export default {
    ...selectors,
    expected
}