import React from "react";

type InputProps = {
    label : string;
    placeholder : string;
    type ?: string;
}

const Input: React.FC<InputProps> = ({
    label = "label",
    placeholder = "placeholder",
    type = "text"
}) => {
    return (
        <>

            <div className="w-full flex flex-col gap-2 mb-6">
                <label className="font-semibold text-[22px]">{label}</label>
                <input type={type} placeholder={placeholder} className="w-full h-[40px] bg-gray-300 border border-gray-400 rounded pl-3 placeholder-[#000]"/>
            </div>

        </>
    );
}

export default Input;