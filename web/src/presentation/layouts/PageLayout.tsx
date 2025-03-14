import { useState } from "react"
import { Header, Sidebar } from "../components"
import Styles from './dashboard-styles.module.scss'
import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { Loading } from "../Routes/Loading";

// type Props = {
//   children: React.ReactNode
// }

export function PageLayout(/*{ children }: Props*/) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const { isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

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