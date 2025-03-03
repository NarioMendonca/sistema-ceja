import Styles from './loading.module.scss'

export const Loading: React.FC = () => {
  return (
    <div className={Styles.loaderContainer}>
      <span className={Styles.loader}></span>
    </div>
  )
}