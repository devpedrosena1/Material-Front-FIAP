import Image from 'next/image'
import Link from 'next/link';
const Produtos = () => {
    return (
        <>
            <div className="text-4xl flex justify-center">
                <h1>Produtos</h1>
            </div>
            <div className="w-full h-[700px] flex  bg-violet-200 items-center justify-center text-2xl font-semibold">
                <ul className="flex  gap-5">
                <Link href={"/Dashboard/Produtos/milka"}> 
                        <li className=""><h2>Chocolate Milka</h2>
                        <Image src="/image/cho1.webp" width={100} height={100} alt="Chocolate milka"/>          
                        <p>R$9,00</p>
                    </li>
                </Link>
                    <hr className="border border-gray-500" />
                   <Link href={"/Dashboard/Produtos/nestle"}> 
                        <li><h2>Chocolate Nestlê</h2>
                        <Image src="/image/choc2.webp" width={100} height={100} alt="Chocolate Nestlê"/>          
                        <p>R$7,00</p>
                       
                    </li> </Link>
                    <hr className="border border-gray-500" />
                    <Link href={"/Dashboard/Produtos/belga"}>
                        <li><h2>Chocolate Belga</h2>
                            <Image src="/image/chco3.webp" width={100} height={100} alt="Chocolate Belga"/>          
                            <p>R$19,00</p>
                        </li>
                    </Link>
                   
                    <hr className="border border-gray-500" />
                    <Link href={"/Dashboard/Produtos/kitkat"}>
                        <li><h2>Kit-Kat</h2>
                            <Image src="/image/kitkat.webp" width={100} height={100} alt="Chocolate Belga"/>          
                            <p>R$2,00</p>
                        </li>
                    </Link>

                </ul>
            </div>

        </>
    );
}

export default Produtos;