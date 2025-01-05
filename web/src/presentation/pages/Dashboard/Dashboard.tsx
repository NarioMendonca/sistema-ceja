import Styles from './dashboard-styles.module.scss'
import { Card } from './components/Card'
import { PageLayout } from '@/presentation/layouts/PageLayout'

export function Dashboard() {
  return (
    <PageLayout>
      <section className={Styles.section}>
        <Card />
        <Card />
        <Card />
      </section>
    </PageLayout>
  )
}