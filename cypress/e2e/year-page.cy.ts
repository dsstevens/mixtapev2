/// <reference types="cypress" />

describe('Albums By Year Page', () => {
  // NOTE: Because of pagination issues, the only way I've been able to stub this causes the fixture to get applied 5 times (because of the 5 pages of pagination), so the same 4 mocked albums appear 5 times. I've added my tests considering this.
  beforeEach(() => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('getReleases');
    cy.visit('/');
    cy.wait('@getReleases');
    cy.get('.years-dropdown-button').click();
    cy.get('.menu-item').contains('1984').click();
  });

  it('should display the page title and HOME button in the header', () => {
    cy.wait('@getReleases');
    cy.get('h1').contains('80\'s MixTape');
    cy.get('.home-button').contains('Home');
  });

  it('should render the correct elements on the page', () => {
    cy.wait('@getReleases');
    cy.get('h2').contains('Albums from the Year 1984');
    cy.get('.album-grid').children().should('have.length', '20');
    cy.get('.album-grid').children().first().contains('.album-title', 'Cocteau Twins - Treasure');
    cy.get('.album-grid').children().last().contains('.album-title', 'Bruce Springsteen - Born In The U.S.A.');
  });
});