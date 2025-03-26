'use client';

import Botao from "../components/Botao/Botao"
import Link from "next/link";

const Contato = () => {
    return (
        <>
            <h1>Contato</h1>

            <Link href={'/'}><Botao cor='green' titulo='Clique'/></Link>
        </>
    );
}

export default Contato;