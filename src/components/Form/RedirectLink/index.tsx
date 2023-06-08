'use client';

import Link, { LinkProps } from 'next/link';

import { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type LinkAttributes = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface RedirectLinkProps extends LinkAttributes {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function RedirectLink({
  children,
  variant = 'primary',
  ...rest
}: RedirectLinkProps) {
  return (
    <Link className={styles[variant]} {...rest}>
      {children}
    </Link>
  );
}
