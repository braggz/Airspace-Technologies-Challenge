//This script is a positive test that check that when the proper login credentials are supplied it will successfully login.

context('Possitive Login Regression Testing', () => {
  it('Possitive Login Testing', () => {
    cy.visit('https://the-internet.herokuapp.com/login')    //Go to the Website
    cy.get('#username').type('tomsmith')                    //Enter Username
    cy.get('#password').type('SuperSecretPassword!')        //Enter Password
    cy.get('button.radius').click()                         //Click Login Button
    cy.get('#flash.flash.success').contains("You logged into a secure area!")//Check that the login was successful

    //This checks whether the enter key works instead of clicking login
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('#password').type('{enter}')         //Presses the enter key
    cy.get('#flash.flash.success').contains("You logged into a secure area!")
  })
})
