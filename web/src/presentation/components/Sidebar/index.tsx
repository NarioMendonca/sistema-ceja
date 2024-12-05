import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'

export function Sidebar() {
  return (
    <aside>
      <span className={Styles.sideBarIcon}><MenuHamburguer /></span>
      <div className={Styles.sideBar}>
        <ul>
          <li>
            <DashboardIcon />
            Dashboard
          </li>
          <li>
            <UsersIcon />
            Usuários
          </li>
          <li>
            <BookIcon />
            Matérias
          </li>
        </ul>
      </div>
    </aside>
  )
}