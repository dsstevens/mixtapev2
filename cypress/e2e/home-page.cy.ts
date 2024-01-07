/// <reference types="cypress" />

describe('Main Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
        statusCode: 200,
        fixture: 'mock-data.json'
      }).as('getReleases');
      cy.visit('http://localhost:3000');
    });
  
    it('should have the correct URL for the Main page', () => {
      cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should display a header with the title on the Home page', () => {
        cy.visit('http://localhost:3000');
        cy.get("h1.page-title").contains("MixTape").should("be.visible");
      });
     
  
    it('displays the Albums By Year dropdown button', () => {
      cy.get('.years-dropdown-button').should('be.visible').and('contain', 'Choose your favorite year from the 80\'s!');
    });

    it('should open the Albums By Year dropdown and navigate to the correct year when a year is selected', () => {
      cy.get('.years-dropdown-button').click();
      cy.get('button').contains('1980').click();
      cy.url().should('include', '/1980');
    });
  
    it('should display the tracklist on the main page', () => {
      cy.get('.tracklist-container').should('be.visible');
    });
  
    it('should load data from the API', () => {
      cy.wait('@getReleases').its('response.statusCode').should('eq', 200);
    });
  });