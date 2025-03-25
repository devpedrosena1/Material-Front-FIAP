import React from "react";

type BotaoProps = {
    cor ?: string;
    texto ?: string;
    onClick ?: () => void;

    // prop : tipo -> prop obrigatório
    // prop ?: tipo -> prop opcional
}

const Botao : React.FC<BotaoProps>= ({
    cor = "green",
    texto = "Clique aqui",
    onClick,
}) => {
    return (
        <>
        <button 
            style={{
                backgroundColor : cor,
                color: "#fff",
                padding: "10px 20px"
            }}
            onClick = { onClick }
        >
            { texto }
        </button>

        </>
    );
}

export default Botao;