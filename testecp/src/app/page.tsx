'use client'

import Image from "next/image";
import Input from "./components/Input/input";
import Botao from "./components/Botao/Botao";


export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">

        {/* Criação do formulário */}
        <form action="" className="w-[550px] h-[800px] bg-white p-10">

          {/* Estamos formatando a div para que ela receba o icon e o titulo do formulario */}
          <div className="w-full h-[100px] flex items-center gap-5">

            <Image src="/image/icon_carrinho.png" alt="Icon compras" width={40} height={40}></Image>
            <h1 className="text-4xl font-semibold">Compras</h1>

          </div>

          {/* hr para estilização e divisão do conteúdo */}
          <hr className="border-gray-400 mb-6"/>

          {/* div com os campos do formulario (inputs) */}
          <div className="w-full">
            <Input label='Setor' placeholder='Digite aqui'/>
            <Input label='Material' placeholder='Digite aqui'/>
            <Input label='Quantidade' placeholder='0' type='number'/>
            <Input label='Valor Unitário' placeholder='0' type='number'/>
            <Input label='Valor Total' placeholder='0' type='number'/>
          </div>

          {/* Botão de enviar */}
          <Botao texto='Novo Card' cor='purple' onClick={() => alert("Nota criada com sucesso!")}/>


        </form>
      </div>
    </>
  );
}
