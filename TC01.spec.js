describe ('Pastebin', function() {
    it('Create paste', function() {
        cy.visit('https://pastebin.com')
        cy.title().should('eq', 'Pastebin.com - #1 paste tool since 2002!')
        // cy.get('.button1').contains('Login').click()
        // cy.get('input[name="user_name"]').type("vladik.gutu@gmail.com")
        // cy.get('input[name="user_password"]').type("Dkflbr1994!")
        cy.get('textarea[name="paste_code"]').type("Hello World")
        cy.get('.button1').contains('Create New Paste').click()
    })  

    it('Visit existing paste', function(){
        cy.visit('www.pastebin.com/9quMA2zt')
        cy.title().should('eq', 'Hello World - Pastebin.com')
    })
})