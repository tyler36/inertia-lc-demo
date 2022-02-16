describe('Authentication', () => {
    it('provides feedback for invalid login', () => {
        cy.refreshDatabase();

        cy.visit('/login');
        cy.get('#email').type('foo@example.com');
        cy.get('#password').type('password');
        cy.contains('button', 'Login').click();

        cy.contains('The provided credentials do not match our records.');
    })

    it('it logs in a user', () => {
        cy.refreshDatabase();

        cy.create('App\\Models\\User', {email: 'joe@example.com'})

        cy.visit('/login');
        cy.get('#email').type('joe@example.com');
        cy.get('#password').type('password');
        cy.contains('button', 'Login').click();

        cy.assertRedirect('/');
    })

    it.only('visits the dashboard', () => {
        cy.login({name: 'John Doe'});

        cy.visit('/').contains('Welcome back, John Doe');
    });
})
