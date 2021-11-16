import React, { useState } from 'react'
import styled, { css } from "styled-components/macro";

import { menuData } from '../data/MenuData.js';
import { FaBars } from "react-icons/fa";
import Logo from '../images/Logo.svg'
import { animateScroll } from 'react-scroll/modules';


const Nav = styled.nav`
    height: 70px;
    justify-content: space-between;
    align-items; center;
    padding: 0rem 2rem;
    z-index: 1000;
    position: fixed;
    width: 100%;
    display: flex;
    background: ${props => props.active ? '#222223' : 'none'};
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

const NavLogo = styled.div`
    background-image: url(${Logo});
    background-size: contain;
    height: 70px;
    width: 159px;
    &:hover{
        transform: translateY(-2px);
        
    }
    @media screen and (max-width: 760px){
        margin-left: 30%;
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

function Navbar({ toggle }) {

    const scroll = animateScroll;
    const [nav, setNav] = useState(false)
    
    const NavMenuLinks = styled.a `
        ${NavLink}
        
    `;    
      
    const onScrollTop = () => {
        scroll.scrollToTop()
    }

    const onScrollProtfolio = () => {
        scroll.scrollTo(860)
    }

    const onScrollContact = () => {
        scroll.scrollTo(1970)
    }

    const onChangeBg = () => {
        if (window.scrollY >= 600){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll', onChangeBg)

    return (
        <Nav active={nav}>
            <NavLogo onClick={onScrollTop}/>
                
            {//<MenuBar onClick={toggle}/>
            }   
            <NavMenu>                
                <NavMenuLinks onClick={onScrollTop}>
                    Inicio
                </NavMenuLinks>

                <NavMenuLinks onClick={onScrollProtfolio}>
                    Nuestro Trabajo
                </NavMenuLinks>

                <NavMenuLinks onClick={onScrollContact}>
                    Contáctanos
                </NavMenuLinks>
                
            </NavMenu> 
            
        </Nav>
    )
}

export default Navbar