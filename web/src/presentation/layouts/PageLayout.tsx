import { useState } from "react"
import { Header, Sidebar } from "../components"
import Styles from './dashboard-styles.module.scss'
import { Outlet } from "react-router-dom"

// type Props = {
//   children: React.ReactNode
// }

export function PageLayout(/*{ children }: Props*/) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <div className={Styles.dashboardContentContainer}>
        <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet />
      </div>
    </div>
  )
}