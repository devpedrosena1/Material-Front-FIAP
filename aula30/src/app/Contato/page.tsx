'use client';

import Botao from "../components/Botao/Botao";

const Contato = () => {
    return (
        <>
            <h1>Contato</h1>

            <Botao cor='green' texto='Clique aqui' onClick={() => { alert("Elemento pressionado") }} />
        </>
    );
}

export default Contato