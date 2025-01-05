import Styles from './grade-accordion-styles.module.scss'

export function GradeAccordion() {
  return (
    <div className={Styles.accordion}>
      <div className={Styles.accordionHeader}>
        <div className={Styles.gradeWrap}>
          <div className={Styles.gradeValueDisplay}>
            7.5
          </div>
          <div className={Styles.gradeInfo}>
            <div className={Styles.gradeCourse}>
              Matemática
            </div>
            <div className={Styles.gradeDescription}>
              Média aritmética
            </div>
          </div>
        </div>
        <span className={Styles.accordionArrow}></span>
      </div>
      <div className={Styles.accordionContent}>
      </div>
    </div>
  )
}