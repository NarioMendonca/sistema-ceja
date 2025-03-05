import React from 'react'
import Styles from './grade-styles.module.scss'

type GradeProps = {
  value: number,
  title: string
  description?: string
}

export const Grade: React.FC<GradeProps> = ({ title, value, description }) => {
  return (
    <div className={Styles.gradeWrap}>
      <div className={Styles.gradeValue}>
        {value}
      </div>
      <div className={Styles.gradeInfo}>
        <div className={Styles.gradeCourse}>
          {title}
        </div>
        <div className={Styles.gradeDescription}>
          {description ? 'Média aritmética' : ''}
        </div>
      </div>
    </div>
  )
}