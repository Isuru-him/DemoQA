class ToolTip {

    tooltipBtn = '#toolTipButton'
    toolTip = '.tooltip-inner'

    hover() {
        cy.get(this.tooltipBtn).trigger('mouseover').invoke('show')
        //cy.contains('You hovered over the Button')
        cy.get(this.toolTip).should('have.text', 'You hovered over the Button')
    }


}
export default ToolTip;