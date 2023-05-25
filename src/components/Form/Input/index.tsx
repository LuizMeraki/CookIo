'use client';

import {
  Dispatch,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';

import styles from './styles.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
  state: string;
  propKey: string;
  actionType: string;
  dispatch: Dispatch<any>;
}

export default function Input({
  label,
  error,
  state,
  propKey,
  actionType,
  dispatch,
  ...rest
}: InputProps) {
  const classNames = error ? styles.error : styles.input;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ actionType, propKey: 'value', payload: e.target.value })
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
