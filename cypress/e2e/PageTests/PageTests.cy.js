import homePage from "../PageObjects/homePage";
import WebTable from "../PageObjects/WebTable";
import Form from "../PageObjects/Form";
import Interaction from "../PageObjects/Interaction";
import Widget from "../PageObjects/Widget";
import Element from "../PageObjects/Element";





/* Here we initialize the imported classes objects */
const hp = new homePage();



describe("Geremedica Testing", function () {

    it("TC01 - Verify user can enter new data into the table", function () {


        cy.visit('https://demoqa.com/')
        const we = hp.clickOnButton("Elements");
        const wt = we.navigateToComponent("Web Tables");
        wt.addANewTableEntry("Alden", "Cantrell", "30", "test@test.com", "12345", "QA")
        wt.verifyAddedRow("Alden", "Cantrell", "30", "test@test.com", "12345", "QA")

    })

    it("TC02 - Verify user can edit the row in a table", function () {

        cy.visit('https://demoqa.com/')
        const we = hp.clickOnButton("Elements");
        const wt = we.navigateToComponent("Web Tables");
        wt.editTableEntry("Gerimedica", "BV")
        wt.verifyEdittedRow("Gerimedica", "BV")

    })


    it("TC03 - Verify broken image", function () {


        cy.visit('https://demoqa.com/')
        const we = hp.clickOnButton("Elements");
        const bi = we.navigateToComponent("Broken Links - Images");
        bi.verifyBrokenImage()
        bi.verifyExistingImage()

    })


    it("TC04 - Verify user can submit the form", function () {


        cy.visit('https://demoqa.com/')
        const formz = hp.clickOnButton("Forms");
        const pf = formz.navigateToComponent("Practice Form");
        pf.fillTheForm('Gerimedica', 'BV', 'test@test.com', 'male', '0123456789', '1990', 'Jan', '15', 'Maths', 'Reading', 'Netherlands', 'Rajasthan', 'Jaipur');
        pf.verifyFormContent('Thanks for submitting the form', 'Gerimedica', 'BV', 'test@test.com', 'male', '0123456789', '1990', 'Jan', '15', 'Maths', 'Reading', 'Netherlands', 'Rajasthan', 'Jaipur');

    })


    it("TC05 - Verify the progress bar", function () {

        cy.visit('https://demoqa.com/')
        const wid = hp.clickOnButton("Widgets");
        const pb = wid.navigateToComponent("Progress Bar")
        pb.clickStartBtn();
        pb.verifyProgressBar()

    })


    it("TC06 - Verify the tooltip", function () {

        cy.visit('https://demoqa.com/')
        const wid = hp.clickOnButton("Widgets");
        const tt = wid.navigateToComponent("Tool Tips")
        tt.hover();

    })


    it("TC07 - - Verify user can drag and drop", function () {


        cy.visit('https://demoqa.com/')
        const inter = hp.clickOnButton("Interactions");
        const drop = inter.navigateToComponent("Droppable")
        drop.dropHere();
        drop.verifyDragging()

    })



})