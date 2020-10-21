//This script is a negative test to make sure incorrect inputs do not work.
// It also uses random characters to further ensure there are no problems with the parsing system/database reading
context('Negative Login Regression Testing', () => {
  it('Negative Login Testing', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    //Checks that blank input does not work
    cy.get('button.radius').click()
    cy.get('#flash.flash.error').contains("invalid")
    //Checks that when a correct username but incorrect password are entered it does not work
    for(var i =0; i < 10; i++){
      cy.get('#username').type('tomsmith')
      cy.get('#password').type(getRandomInput(20))
      cy.get('button.radius').click()
      cy.get('#flash.flash.error').contains("invalid")
    }
    //Checks that when a incorrect username but correct password are entered it does not work
    for(var i =0; i < 10; i++){
      cy.get('#username').type(getRandomInput(20))
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('button.radius').click()
      cy.get('#flash.flash.error').contains("invalid")
    }
    //Checks that when both the username and password are incorrect it does not work
    for(var i =0; i < 10; i++){
      cy.get('#username').type(getRandomInput(20))
      cy.get('#password').type(getRandomInput(20))
      cy.get('button.radius').click()
      cy.get('#flash.flash.error').contains("invalid")
    }
    //Checks using progressively larger sized inputs
    var size = 10;
    for(var i =0; i < 10; i++){
      cy.get('#username').type(getRandomInput(size))
      cy.get('#password').type(getRandomInput(size))
      cy.get('button.radius').click()
      cy.get('#flash.flash.error').contains("invalid")
      size +=5
    }
  })
})

function getRandomInput(size){
  var input = "";
  var selection = "ABCDEFGHIJKLMnOPQRSTUVWXYZabcdefghijklmnopqrstuvwx yz!\"#$%&'()*+,-./0123456789:;<=>? })";
  for(var i =0; i < size; i++){
    input += selection.charAt(Math.floor(Math.random() * selection.length ));
  }
  return input;
}
