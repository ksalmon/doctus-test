
describe('Enrollment Funnel', () => {
  it('should load', () => {
    cy.visit('http://get.inspirecleanenergy-stage.com');

    cy.contains('First Name')
    cy.contains('Last Name')

    cy.get('[name="first_name"]').type('Kyle')
    cy.get('[name="last_name"]').type('Salmon{enter}')


    cy.contains('Next, let\'s get your addres')
  });
});

