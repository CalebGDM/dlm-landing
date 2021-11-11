import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import Imagen from "../images/Imagen2.png";

const Section = styled.div`
  height: auto;

  position: relative;
  

  align-items: center;
  justify-content: center;
  background: #222223;
`;

const Title = styled.h1`
  color: #fa2c22;
  text-align: center;
  font-size: 25;
  margin-top: 1rem;
`;

const CardContainer = styled.div`
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
  }
`;

const Card = styled.div`
  margin-left: 5rem;
  width: 510px;
  min-width: 310px;
  padding-bottom: 1rem;
  background: white;
  border-radius: 10px;
  margin-bottom: 4rem;

  @media screen and (max-width: 1300px) {
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 1100px) {
    width: 410px;
    margin-left: 1rem;
  }
`;

const CardIamge = styled.img`
  width: 100%;
  heigth: 50%;
`;

const CardContent = styled.div`
  display: column;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 0.5rem;
  
`;

const ContentContainer = styled.div`
    display: flex;
    align-content: center;
    
`;

const Icon = styled(FaCheckCircle)`
  color: #0a7efa;
  margin-right: 0.5rem;
  margin-top: 3px;
`;

const Text = styled.p``;

function PortfolioCards({ work }) {
  return (
    <Section>
      <Title>Conce nuestro tabajo</Title>
      <CardContainer>
        {work.map((card, index) => (
          <Card>
            <CardIamge src={card.image} />
            <CardContent>
                {card.arreglos.map((arreglo, index) => (
                    <ContentContainer>
                        <Icon />
                        <Text>{arreglo}</Text>
                    </ContentContainer>
                ))}
              
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
}

export default PortfolioCards;
