'use client';

import { createPortal } from 'react-dom';
import { useRef, useState, useEffect } from 'react';

import { handleModalRender } from '~/utils/handleModal';

import { CloseIcon } from '~/components/SVG/CloseIcon';

import styles from './styles.module.scss';

interface ModalProps {
  id: string;
  children: React.ReactNode;
}

export default function Modal({ id, children }: ModalProps) {
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
          id={id}
          aria-label="modal para exibição de informações"
        >
          <button
            className={styles.closeIcon}
            type="button"
            onClick={() => handleModalRender(id)}
            title="fechar modal"
            aria-label="botão para fechar modal"
          >
            <CloseIcon />
          </button>

          {children}
        </dialog>,
        root.current!
      )
    : null;
}
