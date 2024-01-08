/// <reference types="cypress" />

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('getReleases');
    cy.visit('/');
    cy.wait('@getReleases');
  });

  it('should have the correct URL for the Main page', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display a header with the title on the Home page', () => {
    cy.get("h1.page-title").contains("80\'s MixTape").should("be.visible");
  });

  it('displays the Albums By Year dropdown button', () => {
    cy.get('.years-dropdown-button').should('be.visible').and('contain', 'Choose your favorite year from the 80\'s!');
  });

  it('should open the Albums By Year dropdown and navigate to the correct year when a year is selected', () => {
    cy.get('.years-dropdown-button').click();
    cy.get('button').contains('1984').click();
    cy.url().should('include', '/1984');
  });

  it('should display empty tracklist on the main page on initial load', () => {
    cy.get('.internal-tracklist-container').contains('h2', 'My Playlist');
    cy.get('.tracklist').children().should('have.length', 0);
  });
});