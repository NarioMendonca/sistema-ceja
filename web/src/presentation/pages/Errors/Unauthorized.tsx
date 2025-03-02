import { Link } from "react-router-dom"
import Styles from './error-styles.module.scss'

export const Unauthorized = () => {
  return (
    <div className={Styles.errorContainer}>
      <h1>Você não tem autorização para acessar essa página</h1>
      <Link to='/home' replace>Voltar para página inicial</Link>
    </div>
  )
}