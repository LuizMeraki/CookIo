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
import { handleEmail, handlePassword } from '~/utils/handleChange';

import { handleSubmit } from './helpers/handleSubmit';

import styles from './styles.module.scss';

const initialValue = {
  email: { value: '', error: '' },
  password: { value: '', error: '' },
};

function Login() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [auth, isLoading] = useAuth();

  const isButtonDisabled = handleButtonEnable(state, isLoading);

  return (
    <>
      {isLoading && <PageLoading />}

      <main className={styles.main}>
        <section>
          <h1>Entre e Desvende os Segredos da Culinária Gourmet!</h1>

          <form
            className={styles.form}
            onSubmit={(e) => handleSubmit(e, state, auth, dispatch)}
          >
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

            <Input
              label="Senha"
              type="password"
              placeholder="########"
              state={state.password!.value}
              error={state.password!.error}
              onChange={(e) => handlePassword(e, dispatch)}
            />

            <div className={styles.redirectLinkContainer}>
              <RedirectLink href="/register">Não tem uma conta? Cadastre-se</RedirectLink>
            </div>

            <Button
              type="submit"
              title="fazer login"
              aria-label="fazer login em cookio"
              disabled={isButtonDisabled}
            >
              Entrar
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

export default withoutAuth(Login);
