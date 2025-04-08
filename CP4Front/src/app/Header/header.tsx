<<<<<<< HEAD
import Image from 'next/image'
import Link from 'next/link';

const Header = () =>{

    return(
        <header className="w-full h-[100px] bg-blue-300 flex items-center">
            <div className="w-[250px] h-[90] flex justify-center items-center gap-5">
                <Image src="/image/fiap.jpg" width={100} height={100} alt="Logo"
    />          
                <h1>LOGO</h1>
            </div>
            <nav className='w-[950] h-[90] flex items-center justify-end'>
                    <ul className='flex items-end justify-end gap-10'>
                        <Link href={"/"}><li className='cursor-pointer'>Home</li></Link>
                       <Link href={"/Produtos"}><li className='cursor-pointer'>Produtos</li></Link> 
                    </ul>
                </nav>
        </header>
    );

}

=======
import Image from 'next/image'
import Link from 'next/link';

const Header = () =>{

    return(
        <header className="w-full h-[100px] bg-blue-300 flex items-center">
            <div className="w-[250px] h-[90] flex justify-center items-center gap-5">
                <Image src="/image/fiap.jpg" width={100} height={100} alt="Logo"
    />          
                <h1>LOGO</h1>
            </div>
            <nav className='w-[950] h-[90] flex items-center justify-end'>
                    <ul className='flex items-end justify-end gap-10'>
                        <Link href={"/"}><li className='cursor-pointer'>Home</li></Link>
                       <Link href={"/Produtos"}><li className='cursor-pointer'>Produtos</li></Link> 
                    </ul>
                </nav>
        </header>
    );

}

>>>>>>> 788b1942779dbf5ee9c8610667bdb1171612ecee
export default Header;