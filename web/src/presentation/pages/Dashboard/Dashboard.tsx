import Styles from './dashboard-styles.module.scss'
import { Card } from './components/Card'
import { GetUsersMetrics } from '@/domain/use-cases/users/get-users-metrics'
import { useEffect, useState } from 'react'
import { UsersMetrics } from '@/domain/models/User'

type Props = {
  getUsersMetrics: GetUsersMetrics
}

export function Dashboard({ getUsersMetrics }: Props) {
  const [metrics, setMetrics] = useState<UsersMetrics>({
    students: 0,
    teachers: 0,
    users: 0
  })

  const remoteGetUsersMetrics = () => {
    getUsersMetrics.handle()
      .then(response => {
        setMetrics(response.usersMetrics)
      })
  }

  useEffect(() => {
    remoteGetUsersMetrics()
  }, [])

  return (
    <main>
      <section className={Styles.section}>
        <Card
          cardMetric={metrics.users}
          cardTitle='Total de usuários'
          pageToRedirect='/usuarios'
        />
        <Card
          cardMetric={metrics.teachers}
          cardTitle='Total de professores'
          pageToRedirect='/usuarios'
        />
        <Card
          cardMetric={metrics.students}
          cardTitle='Total de alunos'
          pageToRedirect='/usuarios'
        />
      </section>
    </main>
  )
}