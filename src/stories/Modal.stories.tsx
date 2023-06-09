import { Meta, StoryObj } from '@storybook/react';

import Modal from '~/components/Modal';

import { RequestErrorTemplate } from '~/components/Modal/templates/RequestError';

import { handleModalRender } from '~/utils/handleModal';

type ModalType = typeof Modal;

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<ModalType>;

const modalId = 'modal-storybook';

export const Default: StoryObj<ModalType> = {
  render: () => (
    <>
      <button onClick={() => handleModalRender(modalId)}>OPEN MODAL</button>

      <Modal id={modalId}>
        <RequestErrorTemplate />
      </Modal>
    </>
  ),
};
