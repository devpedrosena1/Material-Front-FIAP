import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='w-full bg-blue-400 flex flex-col justify-center items-center h-screen'>
        <Link href='/pagina1'><div className='w-5xl bg-red-400 mb-2.5 h-20 flex justify-center items-center'>
          <h1 className='text-20 text-[#000000] font-bold'>Opção 1</h1>
        </div></Link>
        <div className='w-5xl bg-red-600 mb-2.5 h-20 flex justify-center items-center'>
          <h1 className='text-20 text-[#FFFFFF] font-bold'>Opção 2</h1>
        </div>
        <div className='w-5xl bg-yellow-300 mb-2.5 h-20 flex justify-center items-center'>
          <h1 className='text-20 text-[#FF1493] font-bold'>Opção 2</h1>
        </div>
      </div>
    </>
  );
}
