import React from 'react'
import styled, { css } from "styled-components/macro";
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData.js';
import { FaBars } from "react-icons/fa";


const Nav = styled.nav`
    height: 60px;
    background: black;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    display: flex;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-itmes: center;
    padding: 0 1rem;
    height: 90%;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        transform: translateY(-2px);
        
    }
`

const Logo = styled(Link)`
    ${NavLink}

    
`;

const MenuBar = styled(FaBars)`
   display: none;
   color: white;   

   @media screen and (max-width: 768px){
        display:block;
        color: white;
        cursor: pointer;
        position: abolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%)
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;    
    margin-right: -28;
    @media screen and (max-width: 768px){
        display: none; 
    } 
       
`;

const NavMenuLinks = styled(Link) `
    ${NavLink}
    
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
