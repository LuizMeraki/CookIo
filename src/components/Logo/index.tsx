'use client';

import Link from 'next/link';

import styles from './styles.module.scss';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className={styles.logo}>
        Cook<span>Io</span>
      </h1>
    </Link>
  );
}
