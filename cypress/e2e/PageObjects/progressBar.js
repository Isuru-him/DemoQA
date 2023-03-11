class ProgressBar {


    startBtn = "Start"

    progressBarIcon = "div[style='width: 100%;']"

    clickStartBtn() {

        cy.contains(this.startBtn).click();
    }

    verifyProgressBar() {

        cy.wait(8000)
        //There exist an uncaughtable exception in this page but handled via a code snippet through e2e.js file under support folder.
        cy.get(this.progressBarIcon).should('be.visible')

        //verifying the background color of a web-element
        cy.get(this.progressBarIcon).should('have.css', 'background-color', 'rgb(40, 167, 69)')



    }


}
export default ProgressBar;