import React from 'react'
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"
import { FaHome, FaPlus, FaUser, FaSignInAlt, FaUserPlus, FaInfoCircle, FaList } from 'react-icons/fa'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" icon={<FaHome />}>Inicio</NavigationItem>
        <NavigationItem link="/my-posts" icon={<FaList />}>Mis Publicaciones</NavigationItem>
        <NavigationItem link="/new-post/sidebar" icon={<FaPlus />}>Nueva Publicación</NavigationItem>
        <NavigationItem link="/log-in" icon={<FaSignInAlt />}>Iniciar Sesión</NavigationItem>
        <NavigationItem link="/register" icon={<FaUserPlus />}>Registrarse</NavigationItem>
        <NavigationItem link="/about-us" icon={<FaInfoCircle />}>Acerca de Nosotros</NavigationItem>
    </ul>
)

export default navigationItems