'use client';

import { useReducer } from 'react';

import Input from '~/components/Form/Input';
import Button from '~/components/Form/Button';
import withoutAuth from '~/components/HOC/withoutAuth';
import PageLoading from '~/components/PageLoading';
import RedirectLink from '~/components/Form/RedirectLink';

import { useAuth } from '~/hooks/useAuth';
import { useClientSide } from '~/hooks/useClientSide';

import { initGoogleAuth } from '~/services/googleAuth';

import { reducer } from '~/utils/reducer';
import {
  handleConfirmPassword,
  handleEmail,
  handleName,
  handlePassword,
} from '~/utils/handleChange';

import { handleSubmit } from './helpers/handleSubmit';

import styles from './styles.module.scss';

const initialValue = {
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
  confirmPassword: { value: '', error: null },
};

function Register() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [auth, isLoading] = useAuth();

  useClientSide(initGoogleAuth);

  return (
    <>
      {isLoading && <PageLoading />}

      <main className={styles.main}>
        <section>
          <h1>Junte-se a Nós e Faça Parte Agora da Comunidade de Receitas</h1>

          <form
            className={styles.form}
            onSubmit={(e) => handleSubmit(e, state, auth, dispatch)}
          >
            <div className={styles.inputGroup}>
              <Input
                label="Nome"
                type="text"
                placeholder="seu nome"
                state={state.username!.value}
                error={state.username!.error}
                onChange={(e) => handleName(e, dispatch)}
              />
            </div>

            <div className={styles.inputGroup}>
              <Input
                label="E-mail"
                type="email"
                placeholder="exemplo@gmail.com"
                state={state.email!.value}
                error={state.email!.error}
                onChange={(e) => handleEmail(e, dispatch)}
              />
            </div>

            <div className={styles.inputGroup}>
              <Input
                label="Criar Senha"
                type="password"
                placeholder="########"
                state={state.password!.value}
                error={state.password!.error}
                onChange={(e) => handlePassword(e, state.confirmPassword!, dispatch)}
              />
            </div>

            <Input
              label="Confirmar Senha"
              type="password"
              placeholder="########"
              state={state.confirmPassword!.value}
              error={state.confirmPassword!.error}
              onChange={(e) => handleConfirmPassword(e, state.password!.value, dispatch)}
            />

            <div className={styles.redirectLinkContainer}>
              <RedirectLink href="/login">Já tem uma conta? Entre agora</RedirectLink>
            </div>

            <Button
              type="submit"
              title="cadastrar conta"
              aria-label="cadastrar em cookio"
            >
              Cadastrar
            </Button>

            <span className={styles.textOr}>OU</span>

            <div className={styles.otherMethodsContainer}>
              <div
                id="google-sign-in"
                aria-label="fazer cadastro usando sua conta google"
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default withoutAuth(Register);
