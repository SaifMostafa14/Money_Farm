import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='Budgetsummary' onClick={toggle}>Budget summary</SidebarLink>
                <SidebarLink to='Spendingsummary' onClick={toggle}>Spending summary</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap> 
                <SidebarRoute to="/signin" onClick={toggle}>User Profile</SidebarRoute> 
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;