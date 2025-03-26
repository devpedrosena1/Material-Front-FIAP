import React from "react";

type BotaoProps = {
    cor?: string,
    titulo?: string,
    clicando?: () => void;
}

const Botao: React.FC<BotaoProps> = ({
    titulo = "titulo",
    clicando
}) => {
    return (
        <>
            <div onClick={clicando} className='w-20 h-8 bg-black font-semibold text-white flex justify-center cursor-pointer'>
                <p>{titulo}</p>
            </div>

        </>
    )
}

export default Botao;