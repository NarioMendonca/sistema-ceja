import React, { useRef, useState } from 'react';
import Styles from './login-styles.module.scss';
import { Input } from '@/presentation/components/InputCustom';
import { Authentication } from '@/domain/use-cases/users/authentication';
import { useLocation, useNavigate } from 'react-router-dom';
import { InvalidCredentialsError } from '@/domain/errors';
import useAuth from '../../hooks/useAuth';

type LoginProps = {
  remoteAuthentication: Authentication
}

export const Login: React.FC<LoginProps> = ({ remoteAuthentication }) => {
  const { requestUserSession } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [errMsg, setErrMsg] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const from = location.state?.from?.pathname

  // auth?.token && username && navigate('/home', { replace: true })

  const handleAuthenticateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { token } = await remoteAuthentication.auth({ email, password });
      setEmail('')
      setPassword('')
      setErrMsg('')
      localStorage.setItem('acessToken', token)
      await requestUserSession()
      from ? navigate(from, { replace: true }) : navigate('/home', { replace: true })
    } catch (err: any) {
      if (err instanceof InvalidCredentialsError) {
        setErrMsg(err.message);
        return;
      }
      setErrMsg('Erro interno do servidor.')
      errRef.current?.focus()
    }
  };

  return (
    <>
      <section>
        <form className={Styles.form} onSubmit={handleAuthenticateUser}>
          <p ref={errRef} className={errMsg ? Styles.errorMessage : Styles.offScreen} aria-live='assertive' >{errMsg}</p>
          <h2>Authenticate</h2>
          {/* Username Input */}

          <Input.Provider inputId='email'>
            <Input.Label text='E-mail:' />
            <Input.Root
              type='email'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </Input.Provider>

          {/*Password Input */}

          <Input.Provider inputId='pwd'>
            <Input.Label text='Password:' />
            <Input.Root
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Input.Provider>
          <button type="submit" disabled={!email || !password}>Login</button>
          <div className={Styles.alternationLinkWrap}>
          </div>
        </form>
      </section>
    </>
  );
};