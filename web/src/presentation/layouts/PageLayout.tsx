import { useState } from "react"
import { Header, Sidebar } from "../components"
import Styles from './dashboard-styles.module.scss'

type Props = {
  children: React.ReactNode
}

export function PageLayout({ children }: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <div className={Styles.dashboardContentContainer}>
        <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}