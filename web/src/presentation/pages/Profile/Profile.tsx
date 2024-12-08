import { PageLayout } from "@/presentation/layouts/PageLayout";
import { MainHeader } from "./components/MainHeader";
import Styles from './profile-styles.module.scss'

export function Profile() {
  return (
    <PageLayout>
      <MainHeader />
      <section className={Styles.userProfileContainer}>
        <div className={Styles.userProfileData}>
          <div>
            <span>Matricula</span>: 3343242
          </div>
          <div>
            <span>Nome</span>: Rogerio
          </div>
          <div>
            <span>Email</span>: roger@gmail.com
          </div>
          <div>
            <span>CPF</span>: 0992342424
          </div>
          <div>
            <span>Data de Nascimento</span>: 19/09/2005
          </div>
        </div>
      </section>
    </PageLayout>
  )
}