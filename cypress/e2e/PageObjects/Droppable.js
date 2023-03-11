class Droppable {

  // for this you need the support of a plugin first you need to install the npm package as a dev dependency

  //then you need to get your source (the item you wish to drag) into a variable

  droppingPlace = '#droppable'

  dropHere() {

    const source = cy.get('#draggable')

    //"draggable is the css selector value of the destination"
    source.drag('#draggable', {
      force: true,
      target: {
        // moving the source to the target value in %
        x: 230,
        y: 40,
      },
    });

  }

  verifyDragging() {

    //asserting whether dragged. assumption - if dragged destination element's background turns to blue 

    cy.get(this.droppingPlace).should('have.css', 'background-color', 'rgb(70, 130, 180)')
  }

}
export default Droppable