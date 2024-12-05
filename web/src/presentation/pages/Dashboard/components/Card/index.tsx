import Styles from './card-styles.module.scss'
import { UsersIcon } from "@/presentation/icons/UsersIcon";

export function Card() {
  return (
    <div className={Styles.cardWrap}>
      <span className={Styles.cardIcon}>
        <UsersIcon />
      </span>
      <div className={Styles.cardContent}>
        <span>127</span>
        Total de alunos
      </div>
    </div>
  )
}