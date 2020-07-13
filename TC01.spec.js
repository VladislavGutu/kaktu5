describe ('Pastebin', function() {
    it('Create paste', function() {
        cy.visit('https://pastebin.com')
        cy.title().should('eq', 'Pastebin.com - #1 paste tool since 2002!')
        cy.get('textarea[name="paste_code"]').type("Hello World!")
        cy.get('#submit').contains('Create New Paste').click()

    })
})  