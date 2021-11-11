import React from 'react'
import styled from 'styled-components'

const InfoSection = styled.div`
    margin-bottom: 10vh;  

`;

const Card = styled.div`

`;

const BgImage = styled.img`
    position: absolute;
    top: 1;
    left: 0;
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    background: red
`;

const Content = styled.div`
    position: relative;
    z-index: 100; 
    display: flex;
    align-items: left;
    flex-direction: column;
    max-width: 1600px;
    width: 50%;
    color: #fff;
    margin-left: 29vw;

    @media screen and (max-width: 560px){
        margin-left: 20px;
        width: 90%;
    }
`;

const Frase = styled.p`
    margin-top: 5vh;
    font-size: 25px;
    text-shadow: 0px 0px 3px black;
    text-align: center;
    

    @media screen and (max-width: 760px){
        margin-bottom: -10vh;
        margin-top: 2vh;
    }

    @media screen and (max-width: 360px){
        margin-bottom: -10vh;
        margin-top: 10px;
    }

    @media screen and (max-width: 330px){
        margin-bottom: -10vh;
        margin-top: 1vh;
        font-size: 23px;
    }

    
`;

function InfoCard({ info }) {
    
    return (
        <InfoSection>
            {info.map((card, index) => (
                <Card>
                    <BgImage src={card.image} alt={info.alt}/>
                    <Content>
                        <Frase>
                            {card.frase}
                        </Frase>
                    </Content>
                </Card>
            ))}  
            
        </InfoSection>
    )
}

export default InfoCard
