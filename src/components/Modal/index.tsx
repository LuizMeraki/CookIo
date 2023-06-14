'use client';

import { createPortal } from 'react-dom';
import { useRef, useState, useEffect } from 'react';

import { handleModalRender } from '~/helpers/handleModal';

import { CloseIcon } from '~/components/SVG/CloseIcon';

import styles from './styles.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const root = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    root.current = document.getElementById('modal-root')!;
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <dialog
          className={styles.modal}
          id="modal"
          aria-label="modal para exibição de informações"
        >
          <button
            className={styles.closeIcon}
            type="button"
            onClick={handleModalRender}
            title="fechar modal"
            aria-label="botão para fechar modal"
          >
            <CloseIcon />
          </button>

          <div className={styles.content}>{children}</div>
        </dialog>,
        root.current!
      )
    : null;
}
