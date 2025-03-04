// import { useEffect, useState } from 'react'
import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon, ClassIcon, Logout } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'
import { Link } from 'react-router-dom'
import useAuth from '@/presentation/hooks/useAuth'
import { SideBarLink } from './SideBarLink'
import { Role } from '@/domain/models/User'

type Props = {
  isSideBarOpen: boolean,
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function Sidebar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  const { logout, auth } = useAuth()

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
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={DashboardIcon} link='/home' requiredRoles={[Role.admin, Role.teacher, Role.student]}>
              Dashboard
            </SideBarLink>
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={UsersIcon} link='/usuarios' requiredRoles={[Role.admin]}>
              Usuários
            </SideBarLink>
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={BookIcon} link='/materias' requiredRoles={[Role.admin, Role.teacher]}>
              Matérias
            </SideBarLink>
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