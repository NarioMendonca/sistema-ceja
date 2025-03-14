import { Link } from "react-router-dom"
import Styles from './side-bar-link.module.scss'
import React from "react"
import { UserRoles } from "@/domain/models/User"
import useAuth from "@/presentation/hooks/useAuth"


type Props = {
  link: string
  isSideBarOpen: boolean
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  children: string
  requiredRoles: UserRoles[]
}

export const SideBarLink = ({ link, isSideBarOpen, icon: Icon, children, requiredRoles }: Props) => {
  const { auth } = useAuth()
  const isUserRoleValid = requiredRoles.find(requiredRole => requiredRole === auth.role)
  return (
    isUserRoleValid
    && (<li>
      <Link to={link} className={!isSideBarOpen ? Styles.linkCenterIcon : ''}>
        <Icon />
        <span className={isSideBarOpen ? Styles.viewDescription : ''}>{children}</span>
      </Link>
    </li>)
  )
}