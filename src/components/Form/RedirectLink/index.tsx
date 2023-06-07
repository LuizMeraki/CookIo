'use client';

import Link, { LinkProps } from 'next/link';

import { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type RedirectLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function RedirectLink(props: RedirectLinkProps) {
  return <Link className={styles.link} {...props} />;
}
