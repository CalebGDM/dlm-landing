import React from 'react'
import * as Icons from 'react-icons/fa';
import styled, {css} from 'styled-components'
import Bg from '../images/Image5.png'
import Button from './Button';
import Input from './Input';
import Message from './Message';

const ContactContainer = styled.section`
    height: auto;
    min-height: 100vh;
    width: 100vw;
    position: relative;
    align-items: center;
    justify-content: center;
    background-size: cover;
    object-fit: cover;
    background-image: url(${Bg})
`;

const Titulo = styled.h1`
    color: #fa2c22;
    text-align: center;
    font-size: 35px;
    padding-top: 2rem;
`;

const Secciones = styled.div`
    margin: 9rem;
    display: grid;
    height: auto;
    width: auto;
    align-content: center;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 2rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
        justify-content: center;
        margin-top: 1rem;
      }

`;

const Formulario = styled.form`
    width: 450px;
    height: auto;

    @media screen and (max-width: 900px) {
        width: 350px;
     }
`;

const Contactos = styled.div`
    
`;

const ContactosTitulo = styled.h3`
    font-size: 40;
    color: white;
    font-wight: 900;
    text-align: center;
    margin-bottom: 10px;
`;

const Contacto = styled.div`
    display: flex;
    margin-left: 6rem;
    margin-bottom: 15px;
    color: white;
    

    @media screen and (max-width: 900px) {
       margin-left: 0rem;
       
    }

`;

const CustomIcon = ({ name }) => {
    const IconComponent = Icons[name];

    if(!IconComponent){
        return <Icons.FaBeer/>
    }

    return <IconComponent />;
};

const IconoEstilos = css`
    color: white;
    font-size: 25px;    
    
    
`;

const Texto = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;  
    @media screen and (max-width: 900px) {
        font-size:15;
    }  
`;



function Contact({contactos}) {
    console.log(contactos[0].icon)
    return (
        <ContactContainer>
            <Titulo>Contáctanos</Titulo>
            <Secciones>
                <Formulario>
                <Input type='text' placeholder='Nombre'/>
                <Input type='email' placeholder='Correo electrónico'/>
                <Message placeholder='Mensaje...' rows={7}/>
                <Button placeholder='Enviar'/>
                </Formulario>
                <Contactos>
                    <ContactosTitulo>Información de contacto</ContactosTitulo>
                    {contactos.map((info, index) => (
                        <Contacto>
                            <CustomIcon name={info.icon}/>
                            <Texto>{info.text}</Texto>
                        </Contacto>
                    ))}
                    
                </Contactos>
            </Secciones>
        </ContactContainer>
    )
}

export default Contact
