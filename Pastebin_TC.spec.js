describe ('Pastebin', function() {
    
    it('Create paste', function() {
        cy.wait(1000) //Timeout
        cy.visit('https://pastebin.com/') //Visiting the main page
        cy.title().should('eq', 'Pastebin.com - #1 paste tool since 2002!') //Verifying that the page is the page we need
        cy.get('.paste_textarea').type('Hello World') //Typing the content for our paste
        cy.get('.btnbig').click() //Submiting our paste
        cy.get('head meta[property="og:url"]').then(function ($a) { //Defining the meta tag where is nested url of new paste
            const href = $a.prop('content') //Here we are assigning the created link for our link to const href
        cy.visit(href)  //Visit paste link with const href 
        cy.url().should('include', 'pastebin.com') //Veryfing if are visiting our existing paste
        })

    })
})  