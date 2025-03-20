
import Input from "./components/Input/input";
import Botao from "./components/Botao/Botao";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-[#05343B]">
      <div className='w-[600px] h-[400px] flex justify-center items-center flex-col bg-[#fff] rounded-[60px] border-b-[20px] border-[]'>
          <h1 className='font-semibold text-4xl text-[#000] mb-8'>LOGIN DA CONTA</h1>
          <form className='w-[400px] h-[200px] flex flex-col gap-2 justify-center items-center p-3'>
            <Input label="Usuário:" corTexto="#000" placeholder="Nome de Usuário:"/>
            <Input label="Senha:" corTexto="#000" placeholder="Digite sua senha:" type="password" value="abobora"/>
            <Link href='/'><Botao titulo="Enviar" /></Link>
          </form>
        </div>
    </div>
      
    </>
  );
}
