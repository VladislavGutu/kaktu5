describe ('Pastebin', function() {
    
    it('Create paste', function() {
        cy.wait(1000)
        cy.visit('https://pastebin.com/')
        cy.title().should('eq', 'Pastebin.com - #1 paste tool since 2002!')
        cy.get('.paste_textarea').type('Hello World')
        cy.get('.btnbig').click()
        cy.get('head meta[property="og:url"]').then(function ($a) {
            const href = $a.prop('content')
        cy.visit(href)
        cy.url().should('include', 'pastebin.com')
        })

    })
})  