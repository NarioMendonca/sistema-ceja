import { LoginHeader } from './components/loginHeader'
import Styles from './login-styles.module.scss'

export function Login() {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder='Digite seu e-mail' />
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder='Digite sua senha' />
        </div>
        <button disabled>Login</button>
      </form>
      <footer className={Styles.footer}>
      </footer>
    </div>
  )
}