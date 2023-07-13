import GoogleIcon from '~/components/SVG/GoogleIcon';

import { redirectUserToGoogleAuth } from '~/services/googleAuth';

import styles from './styles.module.scss';

export default function AuthButton() {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={redirectUserToGoogleAuth}
      title="autentique-se com sua conta google"
      aria-label="autentique-se com sua conta google"
    >
      <GoogleIcon />
      Continuar com o Google
    </button>
  );
}
