import Image from "next/image";

export default function Home() {
  const titulo = 'bg-yellow-700 pb-10 py-4 mt-11' ;
  const titulo2 = 'text-red-700';
  const titulo3 = 'text-amber-300';
  return (
    <>
    <div className={ titulo } >Olá, TAILWIND CSS</div>
    <div className={ `${titulo} , ${titulo2}` } >Olá, TAILWIND CSS</div>
    <div className={ `${titulo} , ${titulo3}` } >Olá, TAILWIND CSS</div>
    <div className="bg-[#ff1493] mt-[30px] h-[100px]">Olá, TAILWIND CSS</div>
    </>
  );
}