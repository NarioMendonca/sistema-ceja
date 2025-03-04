import { GetUsersMetrics } from '@/domain/use-cases/users/get-users-metrics'
import useAuth from '@/presentation/hooks/useAuth'
import Styles from './dashboard-styles.module.scss'
import { AdminDashboard } from './components/AdminDashboard'
import { Role } from '@/domain/models/User'
import { TeacherDashboard } from './components/TeacherDashboard'
import { GetSubjectsMetricsByUserId } from '@/domain/use-cases/subjectTeacher/get-subjects-metrics-by-user-id'

type Props = {
  getUsersMetrics: GetUsersMetrics
  getSubjectsMetrics: GetSubjectsMetricsByUserId
}

export function Dashboard({ getUsersMetrics, getSubjectsMetrics }: Props) {
  const { auth } = useAuth()

  const renderDashboard = () => {
    switch (auth.role) {
      case Role.admin: return <AdminDashboard remoteGetUsersMetrics={getUsersMetrics} />
      case Role.teacher: return <TeacherDashboard remoteGetSubjectsMetrics={getSubjectsMetrics} />
      case Role.student:
    }
  }

  return (
    <main>
      <section className={Styles.section}>
        {renderDashboard()}
      </section>
    </main>
  )
}