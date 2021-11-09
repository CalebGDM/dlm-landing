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
`;

const Content = styled.div`
    position: relative;

    z-index: 100;

    z-index: 10000;

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
    margin-top: 15vh;
    font-size: 25px;
    text-shadow: 0px 0px 3px black;

    @media screen and (max-width: 760px){

        margin-top: 10vh;
    }

    @media screen and (max-width: 360px){

        margin-top: 15vh;
    }

    @media screen and (max-width: 330px){

        margin-top: 5vh;
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
