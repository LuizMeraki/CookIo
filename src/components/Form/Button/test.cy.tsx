import Button from '.';

describe('Button - button', () => {
  it('Should be a button element', () => {
    cy.mount(<Button>Inner element</Button>);
    cy.get('button');
  });

  it('Should not be a button element', () => {
    cy.mount(
      <Button hasAnchor anchor="/">
        Inner element
      </Button>
    );
    cy.get('a');
  });

  it('Should be an anchor element', () => {
    cy.mount(
      <Button hasAnchor anchor="/">
        Inner element
      </Button>
    );
    cy.get('a');
  });

  it('Should not be an anchor element', () => {
    cy.mount(<Button>Inner element</Button>);
    cy.get('button');
  });
});
