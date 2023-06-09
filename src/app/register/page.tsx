'use client';

import { useReducer } from 'react';

import Input from '~/components/Form/Input';
import Button from '~/components/Form/Button';
import AuthButton from '~/components/Form/AuthButton';
import withoutAuth from '~/components/HOC/withoutAuth';
import PageLoading from '~/components/PageLoading';
import RedirectLink from '~/components/Form/RedirectLink';

import { useAuth } from '~/hooks/useAuth';

import { reducer } from '~/utils/reducer';
import { handleButtonEnable } from '~/utils/handleButtonEnable';
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

  const isButtonEnabled = handleButtonEnable(state, isLoading);

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
                onChange={(e) =>
                  handlePassword(e, dispatch, state.confirmPassword!.value)
                }
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
              disabled={isButtonEnabled}
            >
              Cadastrar
            </Button>

            <span className={styles.textOr}>OU</span>

            <div className={styles.otherMethodsContainer}>
              <AuthButton />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default withoutAuth(Register);
