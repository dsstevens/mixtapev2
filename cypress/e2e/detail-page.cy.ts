describe('Album Detail Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.discogs.com/releases/*', {
        statusCode: 200,
        fixture: 'mock-single-album-details.json'
      }).as('getSingleAlbum');
      cy.visit('http://localhost:3000/1982/587059');
    });
  
    it('displays the album title and artist', () => {
      cy.get('.album-title').should('be.visible');
      cy.get('.artist-name').should('be.visible');
    });
  
    it('renders the tracklist', () => {
      cy.get('.track').should('have.length', 10);
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

  });
   