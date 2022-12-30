import React from 'react'
import { CloseIcon, Icon, SidebarContainer } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>
            About
          </SidebarLink>
          <SidebarLink to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink to='services'>
            Services
          </SidebarLink>
          <SidebarLink to='singup'>
            Sing-Up
          </SidebarLink>
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar