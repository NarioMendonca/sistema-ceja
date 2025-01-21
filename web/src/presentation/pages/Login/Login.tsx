import React, { useEffect, useRef, useState } from 'react'
import { LoginHeader } from './components/loginHeader'
import Styles from './login-styles.module.scss'
import { Authentication } from '@/domain/use-cases/users/authentication'
import useAuth from '@/presentation/hooks/useAuth'

type Props = {
  authentication: Authentication
}

export function Login({ authentication }: Props) {
  const { setAuth } = useAuth()

  const emailRef = useRef<HTMLInputElement>(null)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await authentication.auth({ email: state.email, password: state.password })

      setAuth({ acessToken: response.acessToken })
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder='Digite seu e-mail'
            onChange={e => setState({ ...state, email: e.target.value })}
            value={state.email}
            autoComplete='off'
          />
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder='Digite sua senha'
            onChange={e => setState({ ...state, password: e.target.value })}
            value={state.password}
          />
        </div>
        <button>Login</button>
      </form>
      <footer className={Styles.footer}>
      </footer>
    </div>
  )
}