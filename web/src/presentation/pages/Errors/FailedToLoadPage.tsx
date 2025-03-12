import { Link } from 'react-router-dom'
import Styles from './error-styles.module.scss'

export const FailedToLoadPage: React.FC = () => {
  return (
    <div className={Styles.errorContainer}>
      <h1 className={Styles.loader}>Falha ao carregar a página</h1>
      <Link to='/home' replace>Voltar para página inicial</Link>
    </div>
  )
}