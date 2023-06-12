import styles from './styles.module.scss';

export default function PageLoading() {
  return (
    <div className={styles.overlay} aria-label="tela de carregamento">
      <div className={styles.loader} />
    </div>
  );
}
