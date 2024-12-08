import { Header, Sidebar } from "../components"
import Styles from './dashboard-styles.module.scss'

type Props = {
  children: React.ReactNode
}

export function PageLayout({ children }: Props) {
  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}