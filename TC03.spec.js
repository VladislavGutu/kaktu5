describe('Post Verify', function(){
    it('Log in', function(){ 
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.get('input[type="email"]').type("vladik.gutu@gmail.com")
        cy.get('input[type="password"]').type("123456789v")
        cy.get('.btn').contains('Sign in').click()
    })

    it('New Post', function(){
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type("Hello World")
        cy.get('input[placeholder="What\'s this article about?"]').type("Hello World")
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type("Hello World")
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
    })

    it('Check New Post', function(){
        cy.contains('conduit').click()
        cy.get('.nav-link').contains('kaktu5').click()
        cy.get('.preview-link').contains('Hello World').click()
        cy.url().should('include', 'hello-world')
    })

    // it('Mark-unmark favorite', function(){
    //     cy.get('.nav-link').contains('TestingCypress').click()
    //     cy.contains('My Articles').should('be.visible')
    //     cy.get('.ion-heart').first().click()
    //     cy.contains('Favorited Articles').click()
    //     cy.url().should('include', 'favorites')
    //     // cy.get('.ion-heart').first().click()
    //     cy.reload()
        

    // })
})