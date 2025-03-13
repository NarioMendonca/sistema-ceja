import Styles from './grades-view-styles.module.scss'
import { useEffect, useState } from 'react';
import { SubjectsWithData } from '@/domain/models/Subject';
import useAuth from '@/presentation/hooks/useAuth';
import { FetchSubjectsWithData } from '@/domain/use-cases/subjects/fetch-subjects-with-data';
import { GradeAccordion } from './components/Grade/GradeAccordion';

type Props = {
  remoteFetchSubjectsWithData: FetchSubjectsWithData
}

export function GradesView({ remoteFetchSubjectsWithData }: Props) {
  const [subjects, setSubjects] = useState<SubjectsWithData[]>([])
  const { auth } = useAuth()

  useEffect(() => {
    const fetchSubjectsWithData = async () => {
      const { subjects } = await remoteFetchSubjectsWithData.handle({ userId: auth.user?.id! })
      setSubjects(subjects)
    }

    fetchSubjectsWithData()
  }, [])

  return (
    <main className={Styles.gradesViewContainer}>
      <div className={Styles.mainHeaderWrap}>
        <h2>Notas</h2>
      </div>
      {subjects.map((subject, i) => {
        return (
          <GradeAccordion subject={subject} key={i} />
        )
      })}
    </main>
  )
}