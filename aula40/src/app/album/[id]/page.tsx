"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type Album ={
    banda : string;
    album : string;
    imagem : string;
    categoria : string;
    links : string;
    lancamento : string;
    faixas : string;
    descricao : string;
}
const AlbumPage = () =>{
    
        const [disco,setDisco] = useState<Album | null>(null);
        const [erro,setErro] = useState<string | null>(null);
        const { id } = useParams();

        useEffect(()=>{
        
        const buscarDisco = async() =>{
            try{
            
                const response = await fetch("/discos.json");

                if(!response.ok){
                    throw new Error("JSON não foi encontrado");
                }

                const data = await response.json();

                const discoEncontrado = data.find((d: { album : string; banda : string; id: string}) => d.id === id);

                if(!discoEncontrado){
                    throw new Error("Álbum não foi encontrado");
                }

                setDisco(discoEncontrado);

                setErro(null);
            }
            catch(error){
                setErro(error instanceof Error ? error.message : "Erro desconhecido");
            }
        }
        if(id){
            buscarDisco()
        }
    },[id])

    if(erro){
        return <p>{ erro }</p>
    }
    if(!disco){
        return <p>Carregando...</p>
    }

    return(
        <>
            <Image src={`/imagens/${ disco.imagem }.jpg`} width={100} height={100} alt="" />
            <h1>{ disco.album }</h1>
            <p><b>Banda: </b>{ disco.banda }</p>
            <p><b>Categoria: </b>{ disco.categoria }</p>
            <p><b>Ano</b>{ disco.lancamento }</p>
            <p><b>Faixas: </b>{ disco.faixas }</p>
            <p><b>Descrição: </b>{ disco.descricao }</p>
        </>
    )
}
export default AlbumPage;