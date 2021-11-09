import React from 'react'
import styled from 'styled-components'

const Submit = styled.button`
    width: 100%;
    padding: 12px 20px;
    background: #FA2C22;
    border-color: transparent;
    border-radius: 4px;
    color: white;
`;

function Button({placeholder}) {
    return (
        <>
            <Submit type='submit'>
                {placeholder}
            </Submit> 
        </>
    )
}

export default Button
