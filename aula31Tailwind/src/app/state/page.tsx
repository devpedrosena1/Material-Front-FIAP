'use client';

import { useState } from "react";

const state = () => {

    // variaveis sempre criadas aqui
    const [cont, setCont] = useState(0)

    return (
        <>
            <h1>Trabalhando com useState()  </h1>

            <button className="bg-blue-600 p-2 rounded"
                onClick={() => (setCont(cont + 1))}>Contador
            </button>

            <p>O valor de cont é {cont}</p>
        </>
    );
}
export default state