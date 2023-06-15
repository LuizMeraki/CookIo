import { ErrorIcon } from '~/components/SVG/ErrorIcon';

import styles from './styles.module.scss';

export function RequestErrorTemplate() {
  return (
    <div className={styles.wrapper}>
      <ErrorIcon className={styles.errorIcon} />

      <span className={styles.span}>Oops!</span>

      <p className={styles.message}>
        Parece que algo deu errado durante o procedimento, verifique as suas credenciais e
        tente novamente.
      </p>
    </div>
  );
}
