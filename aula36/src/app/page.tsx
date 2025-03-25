'use client';

import Link from "next/link";
import Botao from "./components/Botao/Botao";

export default function Home() {
  return (
    <>
      <h1>Página inicial</h1>
      <Botao cor="red" texto="Comprar" onClick={() => alert("Botão clicado")}/>
      <Botao onClick={() => alert("Botão verde clicado")}/>

      <ul>
        <li>
          <Link href="produto/1">Produto 1</Link>
        </li>
        <li>
          <Link href="produto/2">Produto 2</Link>
        </li>
        <li>
          <Link href="produto/3">Produto 3</Link>
        </li>
        <li>
          <Link href="produto/4">Produto 4</Link>
        </li>
        <li>
          <Link href="produto/5">Produto 5</Link>
        </li>
      </ul>
      
    </>
  );
}
