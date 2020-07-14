describe('Post Verify', function(){
    it('Log in', function(){ //log in
        cy.visit('https://react-redux.realworld.io/#/login')    //Visit the React-redux/login page
        cy.title().should('eq', 'Conduit')  //Verifying if the page is that page we need
        cy.get('input[type="email"]').type("vladik.gutu@gmail.com") //Input email in form
        cy.get('input[type="password"]').type("123456789v") //Input password in form
        cy.get('.btn').contains('Sign in').click() //Signing in
    })

    it('New Post', function(){ //creating new post
        cy.contains('New Post').click() //Find the `New Post` button and click it
        cy.get('input[placeholder="Article Title"]').type("Hello World") //Input article title
        cy.get('input[placeholder="What\'s this article about?"]').type("Hello World") //Input Description
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type("Hello World") //Input content
        cy.contains('Publish Article').click() //publishing article
        cy.url().should('include', 'article') //we are expecting that we accesed article page
    })

    it('Check New Post', function(){ //Check the created post
        cy.contains('conduit').click() //return to main page 
        cy.get('.nav-link').contains('kaktu5').click() //enter profile page
        cy.get('.preview-link').contains('Hello World').click() //enter the post page
        cy.url().should('include', 'hello-world') //we expect the page include `Hello World`
    })

    // it('Mark-unmark favorite', function(){   //We smash that like button and unlike the post
    //     cy.get('.nav-link').contains('TestingCypress').click()
    //     cy.contains('My Articles').should('be.visible')
    //     cy.get('.ion-heart').first().click()
    //     cy.contains('Favorited Articles').click()
    //     cy.url().should('include', 'favorites')
    //     // cy.get('.ion-heart').first().click()
    //     cy.reload()
        

    // })
})