import { UsersMetrics } from "@/domain/models/User"
import { GetUsersMetrics } from "@/domain/use-cases/users/get-users-metrics"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { UsersIcon } from "@/presentation/icons"

type Props = {
  remoteGetUsersMetrics: GetUsersMetrics
}

export const AdminDashboard = ({ remoteGetUsersMetrics }: Props) => {
  const [metrics, setMetrics] = useState<UsersMetrics>({
    students: 0,
    teachers: 0,
    users: 0
  })

  useEffect(() => {
    const getUsersMetrics = async () => {
      const { usersMetrics } = await remoteGetUsersMetrics.handle()
      setMetrics(usersMetrics)
    }

    getUsersMetrics()
  }, [])

  return (
    <>
      <Card
        cardTitle='Total de usuários'
        pageToRedirect='/usuarios'
        icon={UsersIcon}
      >
        {metrics.users.toString()}
      </Card>
      <Card
        cardTitle='Total de professores'
        pageToRedirect='/usuarios'
        icon={UsersIcon}
      >
        {metrics.teachers.toString()}
      </Card>
      <Card
        cardTitle='Total de alunos'
        pageToRedirect='/usuarios'
        icon={UsersIcon}
      >
        {metrics.students.toString()}
      </Card>
    </>
  )
}