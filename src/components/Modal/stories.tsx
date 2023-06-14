import { Meta, StoryObj } from '@storybook/react';

import { handleModalRender } from '~/helpers/handleModal';

import Modal from '.';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit alias et
        nisi molestias ullam nobis id quasi optio, aliquam officia minus a asperiores
        autem perferendis, laudantium possimus deserunt? Veniam?
      </Modal>
    </>
  ),
};
