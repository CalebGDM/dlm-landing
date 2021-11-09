import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   
`;

const FormInput = styled.input`
    background: transparent;
    color: white;
    outline: none;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #fff;
    border-radius: 4px;
    box-sizing: border-box;
    :focus{
        border: 3px solid #fff;
    }
    ::placeholder {
        color: #fff;
    }
`;

function Input({type, placeholder, value, setValue}) {
    return (
        <Container>
            <FormInput type={type}placeholder={placeholder} value={value} onChange={setValue}/>            
        </Container>
    )
}

export default Input
