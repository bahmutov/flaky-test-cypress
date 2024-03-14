describe('Sign Up', () => {
  // this test is almost perfect. It passes most of the times
  // but you will probably fail if you run it 10-20 times in a row
  // Can you do it? Run this test again and again and again to see if it fails?

  it('Adds person to course', () => {
    cy.visit('/')

    // type user name into input
    cy.get('input[name="name"]').click().type('Some Name')
    // type user email
    cy.get('input[name="email"]').click().type('some@email.com')
    // select the "core" department
    cy.get('select[name="department"]').select('core')
    // select the "git-it" course
    cy.get('select[name="course"]').select('git-it')
    //Ensure drop has seleted value before submission
    cy.get('select[name="course"]').invoke('val').should('eql', 'git-it')
    // submit the form
    cy.get('input[type="submit"]').click()
    // the "Saved!" message should appear
    cy.get('input[value="Saved!"]').should('be.visible')
    // and the list of registered people should contain the new person
    // including the email and the course name
    cy.get('li').should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
