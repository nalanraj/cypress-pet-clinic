class FindOwnersPage {
	constructor() {
		this.url = '/owners/find'
		this.addOwnerBtn = 'a.btn'
		this.ownerInformationClass = '.container-fluid'
		this.ownerInformationTxt = 'Owner Information'
		this.lastNameInput = '#lastName'
		this.findOwnerBtn = '.col-sm-offset-2 > .btn'
		this.ownerResultTxt = 'Owners'
	}

	/**
	 * Visit Find owners page
	 */
	visitPage() {
		cy.visit(this.url)
	}

	/**
	 * Go to add owner page by clicking on add owner button
	 */
	goToAddOwner() {
		cy.get(this.addOwnerBtn).click()
	}

	/**
	 * Verify if owner information is displayed
	 */
	verifyOwnerInformation() {
		cy.get(this.ownerInformationClass).should(
			'contain.text',
			this.ownerInformationTxt
		)
	}

	/**
	 * Search for owner by last name
	 */
	searchOwner(ownerLastName) {
		cy.get(this.lastNameInput).type(ownerLastName.lastName)
		cy.get(this.findOwnerBtn).click()
		cy.get(this.ownerInformationClass).should(
			'contain.text',
			this.ownerResultTxt
		)
	}
}
module.exports = new FindOwnersPage()
