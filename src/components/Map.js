import React from 'react'
import styled from 'styled-components'

const ContenedorMapa = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    @media screen and (max-width: 890px) {
        margin-top: -21vh;
      }
`;

const Mapa = styled.iframe`
    width: 100%;
    height: 200px;
`;

function Map() {
    return (
        <ContenedorMapa ><Mapa  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=C.%20Jos%C3%A9%20G.%20Alcaraz%202134,%20Real%20Vista%20Hermosa,%2028028%20Colima,%20Col.+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Mapa></ContenedorMapa>
    )
}

export default Map
