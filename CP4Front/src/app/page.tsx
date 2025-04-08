'use client';
import Image from 'next/image'
import { redirect } from "next/navigation";
import Botao from "./components/Botao/botao";
import router from "next/router";

export default function Home() {
  return (
    <>

      <div className="w-full h-[700] bg-amber-200 flex flex-col items-center justify-center">
        <div className='w-full flex justify-center'>
        <Image src="/image/banner.jpg" width={1000} height={100} alt="Banner de boas vindas"
    />          
        </div>

        <Botao titulo="Produtos" cor="purple" onClick={() => {
          redirect('/Produtos')
        }}/>
      </div>

    </>
  );
}
