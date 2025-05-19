import SelectablePage from "../../pageObjects/SelectablePage";

describe('Selectable Grid Scenarios', () => {
beforeEach(() => {


});

it('Grid selection', () => {
//Open https://demoqa.com/selectable
    SelectablePage.visit();
// Click “Grid”
    SelectablePage.clickGridTab();
// Click- “Two”, “Four”, “Six”, “Eight
    const toClick = ['Two', 'Four', 'Six', 'Eight'];
    toClick.forEach(item => SelectablePage.clickGridItem(item));
// Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    toClick.forEach(item => SelectablePage.validateHighlighted(item));
//Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    const notClicked = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    notClicked.forEach(item => SelectablePage.validateNotHighlighted(item));
});
});
