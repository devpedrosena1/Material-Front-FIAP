'use client';
import React from "react";

type BotaoProps = {
    cor?: string;
    titulo?: string;
    onClick?: () => void;
}

const Botao: React.FC<BotaoProps> = ({
    cor = 'blue',
    titulo = 'titulo',
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className='w-100 h-20 bg-purple-400 font-semibold text-white flex justify-center items-center rounded cursor-pointer'>
                <p>{titulo}</p>
            </div>
        </>
    );
}

export default Botao;