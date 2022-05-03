import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap} from './Sidebar.js';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Swallow</SidebarLink>
                <SidebarLink to='/'>Swallow</SidebarLink>
                <SidebarLink to='/'>Swallow</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap> 

        </SidebarContainer>
    );
}

export default Sidebar