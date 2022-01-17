class AddOwnerPage {
	constructor() {
		this.url = '/owners/new'
		this.firstName = '#firstName'
		this.lastName = '#lastName'
		this.address = '#address'
		this.city = '#city'
		this.telephone = '#telephone'
		this.addNewOwnerBtn = '.btn'
	}

	/**
	 * Visit Add new owner page
	 */
	visitPage() {
		cy.visit(this.url)
	}

	/**
	 * Fill new owner details
	 */
	fillOwnerDetails(ownerData) {
		cy.get(this.firstName).type(ownerData.firstName)
		cy.get(this.lastName).type(ownerData.lastName)
		cy.get(this.address).type(ownerData.address)
		cy.get(this.city).type(ownerData.city)
		cy.get(this.telephone).type(ownerData.telephone)
	}

	/**
	 * Add the new owner
	 */
	addNewOwner() {
		cy.get(this.addNewOwnerBtn).click()
	}
}
module.exports = new AddOwnerPage()
