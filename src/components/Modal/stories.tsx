import { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

import { RequestErrorTemplate } from './templates/RequestError';

import { handleModalRender } from '~/helpers/handleModal';

type ModalType = typeof Modal;

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<ModalType>;

export const Default: StoryObj<ModalType> = {
  render: () => (
    <>
      <button onClick={handleModalRender}>OPEN MODAL</button>

      <Modal>
        <RequestErrorTemplate />
      </Modal>
    </>
  ),
};
