import { useEffect, useState } from "react"
import { Card } from "./Card"
import { GetSubjectsMetricsByUserId } from "@/domain/use-cases/subjectTeacher/get-subjects-metrics-by-user-id"
import useAuth from "@/presentation/hooks/useAuth"
import { BookIcon } from "@/presentation/icons"

type Props = {
  remoteGetSubjectsMetrics: GetSubjectsMetricsByUserId
}

type CardValueStateProps<T> = {
  value: T
  errMsg: string
}

export const TeacherDashboard = ({ remoteGetSubjectsMetrics }: Props) => {
  const { auth } = useAuth()

  const [metrics, setMetrics] = useState<CardValueStateProps<number>>({
    value: 0,
    errMsg: ''
  })

  useEffect(() => {
    const getSubjectsMetrics = async () => {
      try {
        const { subjectsMetrics } = await remoteGetSubjectsMetrics.handle({ userId: auth.user?.id ?? '' })
        setMetrics(prev => ({ ...prev, value: subjectsMetrics }))
      } catch (err) {
        setMetrics(prev => ({ ...prev, errMsg: 'Falha ao buscar dados das matérias' }))
      }
    }

    getSubjectsMetrics()
  }, [])

  return (
    <>
      <Card
        cardTitle='Suas matérias'
        pageToRedirect='/materias'
        icon={BookIcon}
      >
        {metrics.value.toString()}
      </Card>
    </>
  )
}