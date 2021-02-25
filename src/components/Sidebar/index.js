import React from 'react'
import {
    SidebarContainer,
    Icon, CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarBtnWrap
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {


    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink onClick={toggle} href="#pizzas">Pizzas</SidebarLink>
                <SidebarLink onClick={toggle} href='#desserts'>Desserts</SidebarLink>
                <SidebarLink onClick={toggle} href='#home'>Home</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute>Order Now!</SidebarRoute>
            </SidebarBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar
