import { Link } from "react-router-dom"
import Styles from './error-styles.module.scss'

export const NotFound = () => {
  return (
    <div className={Styles.errorContainer}>
      <h1>Página não encontrada</h1>
      <Link to='/home' replace>Voltar para página inicial</Link>
    </div>
  )
}