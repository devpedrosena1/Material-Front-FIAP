import React from "react";

type BotaoProps = {
    cor ?: string;
    texto ?: string;
    onClick ?: () => void;
}

const Botao : React.FC<BotaoProps> = ({
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
                padding: "10px 20px",
                width: "100%",
                marginTop: "10px",
                fontWeight: "bold",
                cursor: "pointer"
            }}
            onClick = { onClick }
        >{texto}</button>
        </>
    );
}

export default Botao;