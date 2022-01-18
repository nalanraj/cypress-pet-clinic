# PetClinic E2E tests

This project contains e2e tests for PetClinic  built in cypress.

## How to install and execute tests

Pre-requisites: 
- Install node js if not done
- And of-course the PetClinic app should be running in your local

Build the project with npm

    npm install

## Command to open Cypress in local

    npx cypress open

## Run the Test in headed mode

After executing the above command Cypress test runner will open.
Click on "addFindOwner.feature" file
Then you could visually see the test running in a browser

## Run the Test in command line in headless mode
    npx cypress run

## What did this E2E test do
- open the browser
- Go to http://localhost:8080
- Add a new owner by clicking on "Add Owner" button
- Find the newly aded owner by searching through his lastname

## Test Reports
After each execution the test report will be generated 
- HTML report in cypress/reports/
- Video of the test run in cypress/videos