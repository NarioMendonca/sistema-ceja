import React from 'react';
import Styles from './card-styles.module.scss'
import { useNavigate } from 'react-router-dom';

type Props = {
  cardTitle: string
  pageToRedirect: string
  children: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

export function Card({ cardTitle, pageToRedirect, children, icon: Icon }: Props) {
  const navigate = useNavigate()

  const redirectPage = (pageUrl: string) => {
    navigate(pageUrl)
  }

  return (
    <div className={Styles.cardWrap} onClick={() => { redirectPage(pageToRedirect) }}>
      <span className={Styles.cardIcon}>
        <Icon />
      </span>
      <div className={Styles.cardContent}>
        <span>{children}</span>
        {cardTitle}
      </div>
    </div>
  )
}