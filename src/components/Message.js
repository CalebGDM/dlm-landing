import React from 'react'
import styled from 'styled-components'

const Messageinput = styled.textarea`
    width: 100%;
    outline: none;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 4px;
    color: white;
    padding: 12px;
    margin: 8px 0;
    
    :focus{
        border: 2px solid #fff;
    }

    ::placeholder {
        color: white;
    }
`;

function Message({rows, placeholder, value, setValue}) {
    console.log(placeholder)
    return (
        <>
            <Messageinput rows={rows} placeholder={placeholder} value={value} onChange={setValue}/>                
           
        </>
    )
}

export default Message
