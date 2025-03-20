import React from "react";

type InputProps = {
    placeholder?: string;
    corTexto?: string;
    label?: string;
    type?: string;
    value?: string;
};

const Input: React.FC<InputProps> = ({
    placeholder = "Digite o texto",
    corTexto = "#3B48EF",
    label = "Label",
    type = "text",
}) => {
    return (
        <>
            <div className='w-full flex justify-center items-left gap-1 flex-col'>
                <div className='w-[80px]'>
                    <label style={{color: corTexto}} className='font-normal text-[18px]'>{label}</label>
                </div>
                <div>
                    <input type = {type} className='w-full h-10 p-1.5 bg-[#b8b0b0] placeholder-[#fff] text-[#fff] font-extralight' placeholder={placeholder} />
                </div>
            </div>
        </>
    );
}

export default Input;