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

it("Do elements show up?", () => {
    name().should("exist")
    specIns().should("exist")
    pineapple().should("exist")
    jalepeno().should("exist")
    mandOranges().should("exist")
    ham().should("exist")
    submitButton().should("exist")
})
it("Can type in text inputs?", () => {
    name()
       .should("have.value", "")
       .type("Chaz")
       .should("have.value", "Chaz");
    specIns()
    .should("have.value", "")
    .type("Extra Napkins please!")
    .should("have.value", "Extra Napkins please!");
})
it("Do the boxes work?", () => {
    pineapple()
         .should("have.value", 'unchecked' )
         .check()
         .should("have.value", 'checked' )
    jalepeno()
        .should("have.value", 'unchecked' )
        .check()
        .should("have.value", 'checked' )
    mandOranges()
        .should("have.value", 'unchecked' )
        .check()
        .should("have.value", 'checked' )
    ham()
        .should("have.value", 'unchecked' )
        .check()
        .should("have.value", 'checked' )
})      
it("Can the form submit?", () => {
    name().type("Chazzz!")
    pineapple().check()
    jalepeno().check()
    mandOranges().check()
    ham().check()
    submitButton().click()

})
})