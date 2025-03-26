import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='w-full bg-pink-300 flex flex-col justify-center items-center h-screen'>

        <Link href='/Produto'>
          <div className='w-5xl bg-red-300 mb-2.5 h-20 flex justify-center items-center rounded-2xl'>
            <h1 className='text-20 text-[#FFF] font-semibold'>Produto</h1>
          </div>
        </Link>
        <Link href='Sobre'>
          <div className='w-5xl bg-red-400 mb-2.5 h-20 flex justify-center items-center rounded-2xl'>
            <h1 className='text-20 text-[#FFF] font-semibold'>Sobre</h1>
          </div>
        </Link>
        <Link href='/Contato'>
          <div className='w-5xl bg-red-500 mb-2.5 h-20 flex justify-center items-center rounded-2xl'>
            <h1 className='text-20 text-[#FFF] font-semibold'>Contato</h1>
          </div>
        </Link>

      </div>
      
    </>
  );
}
