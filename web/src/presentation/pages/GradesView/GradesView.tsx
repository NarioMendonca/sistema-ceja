import Styles from './grades-view-styles.module.scss'
import { MainHeader } from "./components/MainHeader";
import { GradeAccordion } from "./components/GradeAccordion";

export function GradesView() {
  return (
    <>
      <MainHeader />
      <section className={Styles.viewGradesWrap}>
        <GradeAccordion />
        <GradeAccordion />
        <GradeAccordion />
      </section>
    </>
  )
}