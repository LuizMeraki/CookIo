'use client';

import { GoogleIcon } from '~/components/SVG/GoogleIcon';
import { FacebookIcon } from '~/components/SVG/FacebookIcon';

import styles from './styles.module.scss';

interface AuthButtonProps {
  method?: 'Google' | 'Facebook';
}

export default function AuthButton({ method = 'Google' }: AuthButtonProps) {
  const isGoogleMethod = method === 'Google';
  const iconClassName = styles.icon;

  return (
    <button
      className={styles.button}
      type="button"
      title={`faça autenticação com o ${method}`}
      aria-label={`botão para autenticação com o ${method}`}
    >
      {isGoogleMethod ? (
        <GoogleIcon className={iconClassName} />
      ) : (
        <FacebookIcon className={iconClassName} />
      )}
      continuar com o {method}
    </button>
  );
}
