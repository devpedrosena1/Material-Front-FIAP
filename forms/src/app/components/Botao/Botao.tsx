import React from "react";

type BotaoProps = {
    titulo?: string;
    clicando?: () => void;
}

const Botao: React.FC<BotaoProps> = ({
    titulo = "titulo",
    clicando
}) => {
    return (
        <>
            <div onClick={clicando} className='w-[380px] h-10 bg-[#05343B] font-semibold text-white flex justify-center items-center cursor-pointer mt-[20px]'>
                <p>{titulo}</p>
            </div>
        </>
    );
}

export default Botao;