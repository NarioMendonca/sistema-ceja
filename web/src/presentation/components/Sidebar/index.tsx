import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'
import { Link } from 'react-router'

export function Sidebar() {
  return (
    <aside>
      <span className={Styles.sideBarIcon}><MenuHamburguer /></span>
      <div className={Styles.sideBar}>
        <ul>
          <li>
            <Link to={"/"}>
              <DashboardIcon />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/usuarios"}>
              <UsersIcon />
              Usuários
            </Link>
          </li>
          <li>
            <Link to={"/materias"}>
              <BookIcon />
              Matérias
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}