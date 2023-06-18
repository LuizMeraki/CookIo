import Modal from '~/components/Modal';
import { RequestErrorTemplate } from '~/components/Modal/templates/RequestError';
import { handleModalRender } from '~/utils/handleModal';

describe('Modal', () => {
  const primaryModalId = 'modal-primary';
  const secondaryModalId = 'modal-secondary';

  beforeEach(() => {
    cy.mount(
      <>
        <Modal id={primaryModalId}>
          <RequestErrorTemplate />
        </Modal>

        <Modal id={secondaryModalId}>
          <RequestErrorTemplate />
        </Modal>
      </>
    );
  });

  it('Should not render Modal', () => {
    cy.get('dialog').should('not.have.attr', 'open');
  });

  it('Should render primary Modal', () => {
    handleModalRender(primaryModalId);

    cy.get(`#${secondaryModalId}`).should('not.have.attr', 'open');
    cy.get(`#${primaryModalId}`).should('have.attr', 'open');
  });

  it('Should render secondary Modal', () => {
    handleModalRender(secondaryModalId);

    cy.get(`#${primaryModalId}`).should('not.have.attr', 'open');
    cy.get(`#${secondaryModalId}`).should('have.attr', 'open');
  });

  it('Should close Modal', () => {
    handleModalRender(primaryModalId);

    cy.get('.styles_closeIcon__HpqQe').first().click();
    cy.get('dialog').should('not.have.attr', 'open');
  });
});
