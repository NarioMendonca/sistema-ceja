import Styles from './grades-view-styles.module.scss'
import { Grade } from "./components/Grade";
import { MainHeader } from './components/MainHeader';
import { Accordion } from '@/presentation/components/Accordion';

export function GradesView() {
  return (
    <main className={Styles.gradesViewContainer}>
      <MainHeader />
      <Accordion.Provider>
        <Accordion.Header>
          <Grade
            title='Matemática'
            value={7.5}
            description='Média aritmética'
          />
        </Accordion.Header>
        <Accordion.Content extraClassName={Styles.contentGradeWrap}>
          <Grade
            title='Prova'
            value={6}
            description='Nota refente a prova'
          />
          <Grade
            title='Trabalho'
            value={8}
            description=''
          />
        </Accordion.Content>
      </Accordion.Provider>
    </main>
  )
}