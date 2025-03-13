import Styles from './grade-styles.module.scss'
import { Accordion } from "@/presentation/components/Accordion";
import { SubjectsWithData } from "@/domain/models/Subject";
import { useEffect, useState } from 'react';

type Props = {
  subject: SubjectsWithData
}

export function GradeAccordion({ subject }: Props) {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('')
  const modules = subject.Modules
  const selectedModule = modules.find(module => module.id === selectedModuleId)

  useEffect(() => {
    setSelectedModuleId(modules[0]?.id)
  }, [])


  function calcAvgGrade() {
    const grades = selectedModule?.Grades

    if (grades?.length === 0 || !grades) {
      return '-'
    }

    let sumGrades = 0
    grades?.forEach(grade => {
      sumGrades += grade.grade
    })
    return (sumGrades / grades.length).toFixed(2)
  }

  return (
    <Accordion.Provider>
      <Accordion.Header>
        <div className={Styles.gradeWrap}>
          <div className={Styles.gradeValue}>
            {calcAvgGrade()}
          </div>
          <div className={Styles.gradeInfo}>
            <div className={Styles.gradeCourse}>
              {subject.name}
            </div>
            <div className={Styles.gradeDescription}>
              {subject.description ?? ''}
            </div>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Content extraClassName={Styles.contentGradeWrap}>
        <select
          id="moduleSelect"
          className={Styles.selectModule}
          onChange={(e) => setSelectedModuleId(e.target.value)}
          value={selectedModuleId}
        >
          {modules.map((module, i) => {
            return <option value={module.id} key={i}>{module.name}</option>
          })}
        </select>
        {selectedModule?.Grades.map((grade, i) => {
          return (
            <div className={Styles.gradeWrap} key={i}>
              <div className={Styles.gradeValue}>
                {grade.grade}
              </div>
              <div className={Styles.gradeInfo}>
                <div className={Styles.gradeCourse}>
                  {grade.name}
                </div>
              </div>
            </div>
          )
        })}
      </Accordion.Content>
    </Accordion.Provider>
  )
}