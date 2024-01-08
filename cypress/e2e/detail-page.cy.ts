/// <reference types="cypress" />

describe('Album Detail Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('getReleases');
    cy.intercept('GET', 'https://api.discogs.com/releases/*', {
      statusCode: 200,
      fixture: 'mock-single-album-details.json'
    }).as('getSingleAlbum');
    cy.visit('http://localhost:3000/1982/587059');
    cy.wait('@getReleases');
    cy.wait('@getSingleAlbum');
  });

  it('displays the album title and artist', () => {
    cy.get('.album-title').should('be.visible');
    cy.get('.artist-name').should('be.visible');
  });

  it('renders the tracklist', () => {
    cy.get('.track').should('have.length', 10);
    cy.get('.all-tracks').children().first().contains('Who Can It Be Now?');
    cy.get('.all-tracks').children().last().contains('Down By The Sea');
  });

  it('displays each track title with a sequential number', () => {
    cy.get('.track').each((el, index) => {
      cy.wrap(el).find('p').should('contain', `${index + 1}.`);
    });
  });

  it('shows Add button for each track', () => {
    cy.get('.add-button').should('have.length', 10);
  });

  it('contains a Home button in the banner', () => {
    cy.get('.home-button').should('exist');
  });

  it('navigates to the home page when the Home button is clicked', () => {
    cy.get('.home-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('adds track to user\'s playlist upon clicking the add button', () => {
    cy.get('.add-button').first().click();
    cy.wait(200);
    cy.get('.add-button').last().click();
    cy.wait(200);
    cy.get('.home-button').click();
    cy.get('.internal-tracklist-container').contains('h2', 'My Playlist');
    cy.get('.tracklist').children().should('have.length', 2);
    cy.get('.tracklist').children().first().contains('Who Can It Be Now?');
    cy.get('.tracklist').children().last().contains('Down By The Sea');
  });
});
