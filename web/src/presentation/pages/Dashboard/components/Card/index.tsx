import Styles from './card-styles.module.scss'
import { UsersIcon } from "@/presentation/icons/UsersIcon";
import { useNavigate } from 'react-router';

type Props = {
  cardTitle: string
  cardMetric: number
  pageToRedirect: string
}

export function Card({ cardMetric, cardTitle, pageToRedirect }: Props) {
  const navigate = useNavigate()

  const redirectPage = (pageUrl: string) => {
    navigate(pageUrl)
  }

  return (
    <div className={Styles.cardWrap} onClick={() => { redirectPage(pageToRedirect) }}>
      <span className={Styles.cardIcon}>
        <UsersIcon />
      </span>
      <div className={Styles.cardContent}>
        <span>{cardMetric}</span>
        {cardTitle}
      </div>
    </div>
  )
}