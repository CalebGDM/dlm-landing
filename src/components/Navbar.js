import React from 'react'
import styled, { css } from "styled-components/macro";
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData.js';
import { FaBars } from "react-icons/fa";
import Logo from '../images/Logo.svg'

const Nav = styled.nav`
    height: 60px;
    justify-content: space-between;
    align-items; center;
    padding: 0rem 2rem;
    z-index: 1000;
    position: fixed;
    width: 100%;
    display: flex;
    background: blue;

`;

const NavLink = css`
    font-family: 'Rubik', sans-serif;
    font-size: 23px;
    color: #fff;
    display: flex;
    align-itmes: center;
    padding: 1rem 1rem;
    height: 90%;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        transform: translateY(-2px);
        color: #FC807A;
    }
`

const NavLogo = styled(Link)`
    background-image: url(${Logo});
    background-size: contain;
    height: 70px;
    width: 159px;
    &:hover{
        transform: translateY(-2px);
        
    }
    
    
`;

const MenuBar = styled(FaBars)`
   display: none;
   color: white;   

   @media screen and (max-width: 760px){
        display:block;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        position: abolute;
        top: 0;
        right: 0;
        transform: translate(10%, 100%);
    }

    &:hover{
        color: #FC807A;
        
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;    
    margin-right: -28;
    @media screen and (max-width: 760px){
        display: none; 
    } 
       
`;

const NavMenuLinks = styled(Link) `
    ${NavLink}
    
`;


function Navbar({ toggle }) {
    return (
        <Nav>
            <NavLogo/>
                
            <MenuBar onClick={toggle}/>
            
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
