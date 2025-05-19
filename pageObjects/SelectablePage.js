class SelectablePage {
static visit() {
    cy.visit('https://demoqa.com/selectable');
}

static clickGridTab() {
    cy.get('#demo-tab-grid').click();
}

static clickGridItem(itemText) {
    cy.get('#gridContainer .list-group-item').contains(itemText).click();
}

static validateHighlighted(itemText) {
    cy.get('#gridContainer .list-group-item')
    .contains(itemText)
    .should('have.class', 'active');
}

static validateNotHighlighted(itemText) {
    cy.get('#gridContainer .list-group-item')
    .contains(itemText)
    .should('not.have.class', 'active');
}
}

export default SelectablePage;
