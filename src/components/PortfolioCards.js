import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components'
import Imagen from '../images/Imagen2.png'

const Section = styled.div`
   
    align-items: center;
    justify-content: center;
    background: #222223;
`;

const Title = styled.h1`
    color: #FA2C22;
    text-align: center;
    font-size: 25;
    margin-top: 1rem;
`;

const CardContainer =styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 850px){
        flex-direction: column;
    }
`;

const Card = styled.div`
    width: 510px;
    min-width: 350px;
    padding-bottom: 1rem;
    background: white;
    border-radius: 10px;
    margin: 50px;;
`;

const CardIamge = styled.img`
    width: 100%;
    heigth: 50%;
`;

const CardContent = styled.div`
    display: flex;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 2rem;
`;

const Icon = styled(FaCheckCircle)`
    color: #0A7EFA;
`;

const Text = styled.p`

`;

function PortfolioCards() {
    return (
        <Section>
            <Title>Conce nuestro tabajo</Title>
            <CardContainer>
            <Card>
                <CardIamge src={Imagen}/>
                <CardContent>
                    <Icon/>
                    <Text>Lol</Text>
                </CardContent>                
            </Card>
            <Card>
                <CardIamge src={Imagen}/>
                <CardContent>
                    <Icon/>
                    <Text>Lol</Text>
                </CardContent>                
            </Card>
            </CardContainer>
           
            
        </Section>
    )
}

export default PortfolioCards
