'use client';

import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  state: string;
  onChangeCallback: () => void;
}

export default function Input({
  label,
  error,
  state,
  onChangeCallback,
  ...rest
}: InputProps) {
  const classNames = error ? styles.error : styles.input;

  function handleChange() {
    onChangeCallback();
  }

  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>

      <input
        className={classNames}
        id={label}
        value={state}
        onChange={handleChange}
        {...rest}
      />

      {error && <span className={styles.message}>{error}</span>}
    </>
  );
}
