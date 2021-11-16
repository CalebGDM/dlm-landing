import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import Logo from '../images/Logo.svg';
import { animateScroll } from 'react-scroll/modules';


const Container = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #021932;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const NavLogo = styled.div`
    background-image: url(${Logo});
    background-size: contain;
    height: 70px;
    width: 159px;
    position: absolute;
    top: 0.5rem;
    left: 1.5rem;
    
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: white;
`;

const Wrapper = styled.div`

`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gird-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
    }
    
    
`;

const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    
    padding: 2rem;
    font-size: 1.5rem;
    list-style: none;
    color: white;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    
    //border-bottom: 2px solid #64120E;
   

    &:hover{
        transform: translateY(-2px);
        background: #064C96;
        
    }
`;

function Dropdown({isOpen, toggle}) {

    const scroll = animateScroll;

    const onScrollTop = () => {
        toggle()
        scroll.scrollToTop()
    }

    const onScrollPortfolio = () => {
        toggle()
        scroll.scrollTo(870)
    }

    const onScrollContact = () => {
        toggle()
        scroll.scrollTo(2480)
    }
    
    return (
        <Container isOpen={isOpen} onClick={toggle}> 
            <NavLogo onClick={toggle}/>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <Wrapper>
                <DropdownMenu>
                    <DropdownLink onClick={onScrollTop}>
                        Inicio
                    </DropdownLink>

                    <DropdownLink onClick={onScrollPortfolio}>
                        Nuestro trabajo
                    </DropdownLink>

                    <DropdownLink onClick={onScrollContact}>
                        Contáctanos
                    </DropdownLink>
                    
                </DropdownMenu>
            </Wrapper>
        </Container>
    )
}

export default Dropdown
