// import { useEffect, useState } from 'react'
import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'
import { Link } from 'react-router'

type Props = {
  isSideBarOpen: boolean,
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function Sidebar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  return (
    <aside className={`${Styles.sidebar} ${!isSideBarOpen ? Styles.sidebarActive : ''}`}>
      <button 
        className={Styles.sideBarIcon}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
          <MenuHamburguer />
      </button>
      <div className={Styles.sideBar}>
        <ul>
          <li>
            <Link to={"/"}>
              <DashboardIcon />
              {isSideBarOpen ? "Dashboard" : ""}
            </Link>
          </li>
          <li>
            <Link to={"/usuarios"}>
              <UsersIcon />
              {isSideBarOpen ? "Usuários" : ""}
            </Link>
          </li>
          <li>
            <Link to={"/materias"}>
              <BookIcon />
              {isSideBarOpen ? "Matérias" : ""}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}