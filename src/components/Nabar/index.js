import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData.js';

const Nav = styled.nav`
    height: 60px;
    background: black;
    justify-content: space-between;
    display: flex,
`;

const Logo = styled(Link)`
    color: white;
`;

const MenuBar = styled.i`

`;

const NavMenu = styled.div`

`;

const NavMenuLinks = styled(Link) `
    color: white;
`;

function Navbar() {
    return (
        <Nav>
            <Logo>
                dlm
            </Logo>
            <MenuBar/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar
