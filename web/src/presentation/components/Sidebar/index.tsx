import { BookIcon, DashboardIcon, MenuHamburguer, UsersIcon, Logout } from '@/presentation/icons'
import Styles from './sidebar-styles.module.scss'
import useAuth from '@/presentation/hooks/useAuth'
import { SideBarLink } from './SideBarLink'
import { Role } from '@/domain/models/User'
import { Star } from '@/presentation/icons/Star'

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
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={DashboardIcon} link='/home' requiredRoles={[Role.admin, Role.teacher, Role.student]}>
              Dashboard
            </SideBarLink>
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={UsersIcon} link='/usuarios' requiredRoles={[Role.admin]}>
              Usuários
            </SideBarLink>
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={BookIcon} link='/materias' requiredRoles={[Role.admin, Role.teacher]}>
              Matérias
            </SideBarLink>
            <SideBarLink isSideBarOpen={isSideBarOpen} icon={Star} link='/notas' requiredRoles={[Role.student]}>
              Boletim
            </SideBarLink>
          </ul>
        </div>
        <div className={Styles.sideBarLogout}>
          <button className={!isSideBarOpen ? Styles.linkCenterIcon : '' + Styles.sideBarOption} onClick={logout}>
            <Logout />
            <span className={isSideBarOpen ? Styles.viewDescription : ''}>Sair</span>
          </button>
        </div>
      </div>
    </aside>
  )
}