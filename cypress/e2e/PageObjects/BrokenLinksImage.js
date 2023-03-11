class BrokenLinksImage {

    brokenImageLink = "img[src='/images/Toolsqa_1.jpg"
    unbrokenImageLink = "img[src='/images/Toolsqa.jpg"

    /*
    via this verification point the item located is checked for its visibility first and then it is verified for 
     its availability, if it is available natural width cant be 0

     vice-versa is also been verified simultaniously, the 2nd image is available hence it is expected to have its natural 
     width greater than 0

     */

    verifyBrokenImage() {

        cy.get(this.brokenImageLink).should('be.visible').and(img => { expect(img[0].naturalWidth).to.eq(0) })




    }

    verifyExistingImage() {
        cy.get(this.unbrokenImageLink).should('be.visible').and(img => { expect(img[0].naturalWidth).to.gt(0) })

    }

}
export default BrokenLinksImage