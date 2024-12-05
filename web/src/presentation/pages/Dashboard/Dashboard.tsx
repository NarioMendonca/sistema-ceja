import Styles from './dashboard-styles.module.scss'
import { Card } from './components/Card'
import { Header, Sidebar } from '@/presentation/components'

export function Dashboard() {
  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <Sidebar />
      <main>
        <section className={Styles.section}>
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  )
}