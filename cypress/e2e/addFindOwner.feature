Feature: E2E tests for Pet Clinic

    Adding a owner for Pet Clinic
    Search for the newly added owner

Scenario: Add and Find a owner
    Given As a user I navigate to Find owner page
    When I add a new owner
    Then The new owner should be added
    And I should be able to find this newly added owner