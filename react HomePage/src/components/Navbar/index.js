import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
        <NavLogo to='/'>GreenPocket</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks to='Budgetsummary'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='Budgetsummary'>Budget summary</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='Spendingsummary'>Spending summary</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/profile">LOG OUT</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;