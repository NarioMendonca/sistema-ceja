// import { useEffect, useState } from 'react'
import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon, ClassIcon, Logout } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'
import { Link } from 'react-router-dom'
import useAuth from '@/presentation/hooks/useAuth'

type Props = {
  isSideBarOpen: boolean,
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function Sidebar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  const { logout } = useAuth()

  return (
    <aside className={`${Styles.sidebar} ${!isSideBarOpen ? Styles.sidebarActive : ''}`}>
      <button
        className={Styles.sideBarIcon}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <MenuHamburguer />
      </button>
      <div className={Styles.sideBar}>
        <div className={Styles.sideBarNavigationOptions}>
          <ul>
            <li>
              <Link to="/home" className={!isSideBarOpen ? Styles.linkCenterIcon : ''}>
                <DashboardIcon />
                {isSideBarOpen ? "Dashboard" : ""}
              </Link>
            </li>
            <li>
              <Link to={"/usuarios"} className={!isSideBarOpen ? Styles.linkCenterIcon : ''}>
                <UsersIcon />
                {isSideBarOpen ? "Usuários" : ""}
              </Link>
            </li>
            <li>
              <Link to={"/materias"} className={!isSideBarOpen ? Styles.linkCenterIcon : ''}>
                <BookIcon />
                {isSideBarOpen ? "Matérias" : ""}
              </Link>
            </li>
            <li>
              <Link to={"/classes"} className={!isSideBarOpen ? Styles.linkCenterIcon : ''}>
                <ClassIcon />
                {isSideBarOpen ? "Turmas" : ""}
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.sideBarLogout}>
          <button className={!isSideBarOpen ? Styles.linkCenterIcon : '' + Styles.sideBarOption} onClick={logout}>
            <Logout />
            {isSideBarOpen ? "Sair" : ""}
          </button>
        </div>
      </div>
    </aside>
  )
}