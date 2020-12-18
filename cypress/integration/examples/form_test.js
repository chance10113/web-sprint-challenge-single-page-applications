import cy from 'cypress'
describe(" PizzaForm App ", () => {
    beforeEach(() => {
        // arbitrary code you want running before tests start
        cy.visit("http://localhost:3000");
      });

const name = () => cy.get('input[name="name"]')
const specIns = () => cy.get('input[name="specIns"]')
const pineapple = () => cy.get('input[name="pineapple"]')
const jalepeno = () => cy.get('input[name="jalepeno"]')
const mandOranges = () => cy.get('input[name="mandOranges"]')
const ham = () => cy.get('input[name="ham"]')
const submitButton = () => cy.get('#submitButton')

})