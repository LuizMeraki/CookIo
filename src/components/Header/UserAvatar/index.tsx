'use client';

import Link from 'next/link';
import Image from 'next/image';

import { GuestIcon } from '~/components/SVG/GuestIcon';

import styles from './styles.module.scss';

interface UserAvatarProps {
  avatar: string | undefined;
}

export default function UserAvatar({ avatar }: UserAvatarProps) {
  const linkPath = avatar ? '/profile' : '/login';

  return (
    <Link href={linkPath} aria-label="avatar do usuário">
      {avatar ? (
        <Image
          className={styles.avatar}
          src={avatar}
          alt="avatar com duas das letras do nome do usuário"
          width={100}
          height={100}
        />
      ) : (
        <GuestIcon />
      )}
    </Link>
  );
}
