import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import styled from 'styled-components'

const Container = styled.section`
    width: 100%;
    height: 60px;
    position: relative;
    background: #222223;
    
`;

const Copy = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;

const Icon = styled(FaCopyright)`
    color: white;
    font-size: 20px;
    margin-right: 0.5rem;
`;

const Text = styled.p`
    color: white;
`;

function Footer() {
    return (
        <Container>
            <Copy>
                <Icon/>
                <Text>Copyright {new Date().getFullYear()}</Text>
            </Copy>
        </Container>
    )
}

export default Footer
