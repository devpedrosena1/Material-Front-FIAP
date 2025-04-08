"use client";
import Link from "next/link";
import { useState } from "react";

type Albuns = {
  id : string;
  banda : string;
  album : string;
}
export default function Home() {

  const [discos,setDiscos] = useState<Albuns[]>([])

  const buscarAlbuns = async () => {
    try{
      const response = await fetch("/discos.json");
      const data = await response.json();
      
      setDiscos(data);
    } catch(error){
      console.error(error);
    }
  }
  buscarAlbuns();

  return (
    <>
      <ul>
        {
          discos.map((disco, index) =>(
            <li key={ index }> <Link href={`album/${ disco.id }`}> { disco.album }</Link> - { disco.banda } </li>
          ))        
        }
        
      </ul>
    </>
  );
}
