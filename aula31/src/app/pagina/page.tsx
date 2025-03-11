'use client';

import styled from "styled-components";

const TituloH2 = styled.h2 `
    border-left: 6px solid #00f;
    border-bottom: 2px solid #00f;
    width: 300px;
    color: #000;
    padding: 10px 20px 10px 30px;
    text-align: center;
    font-size: 25px;
`

const pagina = () => {
    return (
        <>
            <TituloH2>Componente Página</TituloH2>
            <TituloH2>Componente Página 2</TituloH2>

            <h2>Teste com H2</h2>
        </>
    )
}

export default pagina;