class WebTable {

    /* Only written the adequate level of code for the assignment else these classes also can be customized to tailor it more general */

    addBtn = "#addNewRecordButton"
    editBtn = "#edit-record-2" //This is the edit btn for the 2nd record of the table.
    firstName = "#firstName-wrapper"
    lastName = "#lastName-wrapper"
    age = "input[id='age']"
    email = "#userEmail-wrapper"
    salary = "#salary-wrapper"
    department = "#department-wrapper"
    submitBtn = "#submit"

    forthRowTableCellOne = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(1)"
    forthRowTableCelltwo = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(2)"
    forthRowTableCellthree = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(3)"
    forthRowTableCellfour = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(4)"
    forthRowTableCellfive = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(5)"
    forthRowTableCellsix = ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(6)"


    secondRowTableCellone = ".rt-tbody .rt-tr-group:nth-of-type(2) div .rt-td:nth-of-type(1)"
    secondRowTableCelltwo = ".rt-tbody .rt-tr-group:nth-of-type(2) div .rt-td:nth-of-type(2)"



    addANewTableEntry(FirstName, LastName, Age, Email, Salary, Department) {

        cy.get(this.addBtn).click();
        cy.get(this.firstName).click().type(FirstName)
        cy.get(this.lastName).click().type(LastName)
        cy.get(this.age).type(Age)
        cy.get(this.email).click().type(Email)
        cy.get(this.salary).click().type(Salary)
        cy.get(this.department).click().type(Department)
        cy.get(this.submitBtn).click();

    }


    editTableEntry(FirstName, LastName) {

        cy.get(this.editBtn).click();
        cy.get(this.firstName).clear().type(FirstName)
        cy.get(this.lastName).clear().type(LastName)
        cy.get(this.submitBtn).click();

    }

    verifyAddedRow(FirstName, LastName, Age, Email, Salary, Department) {

        cy.get(this.forthRowTableCellOne).should('have.text', FirstName)
        cy.get(this.forthRowTableCelltwo).should('have.text', LastName)
        cy.get(this.forthRowTableCellthree).should('have.text', Age)
        cy.get(this.forthRowTableCellfour).should('have.text', Email)
        cy.get(this.forthRowTableCellfive).should('have.text', Salary)
        cy.get(this.forthRowTableCellsix).should('have.text', Department)

    }

    verifyEdittedRow(FirstName, LastName) {

        cy.get(this.secondRowTableCellone).should('have.text', FirstName)
        cy.get(this.secondRowTableCelltwo).should('have.text', LastName)

    }


}
export default WebTable