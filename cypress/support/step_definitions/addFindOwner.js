/// <reference types="Cypress" />
import {
	Before,
	Given,
	When,
	Then,
	And,
} from 'cypress-cucumber-preprocessor/steps'

// Page Objects
const findOwnersPage = require('../pageObjects/FindOwnersPage')
const addOwnerPage = require('../pageObjects/AddOwnerPage')

Given('As a user I navigate to Find owner page', () => {
	findOwnersPage.visitPage()
})

When('I add a new owner', () => {
	findOwnersPage.goToAddOwner()
	cy.fixture('ownerData').then(function (ownerData) {
		this.ownerData = ownerData
		addOwnerPage.fillOwnerDetails(this.ownerData)
	})
	addOwnerPage.addNewOwner()
})

Then('The new owner should be added', () => {
	findOwnersPage.verifyOwnerInformation()
})

And('I should be able to find this newly added owner', () => {
	findOwnersPage.visitPage()
	cy.fixture('ownerData').then(function (ownerLastName) {
		this.ownerLastName = ownerLastName
		findOwnersPage.searchOwner(this.ownerLastName)
	})
})
