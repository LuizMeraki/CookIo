'use client';

import { lazy, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

const Link = lazy(() => import('next/link'));

import styles from './styles.module.scss';

type ElementsType = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ElementsType {
  children: React.ReactNode;
  hasAnchor?: boolean;
  anchor?: string;
}

export default function Button({
  children,
  hasAnchor = false,
  anchor = '',
  ...rest
}: ButtonProps) {
  return (
    <>
      {hasAnchor ? (
        <Link className={styles.element} href={anchor}>
          {children}
        </Link>
      ) : (
        <button className={styles.element} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}
