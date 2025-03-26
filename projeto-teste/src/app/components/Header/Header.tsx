import Link from 'next/link';
import './header.css'

const Header = () => {
    return (
        <>
            <header>
                <h1>Cabeçalho</h1>
                <ul className='menu'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/Produto'}>Produto</Link>
                    </li>
                    <li>
                        <Link href={'/Contato'}>Contato</Link>
                    </li>
                    <li>
                        <Link href={'/Sobre'}>Sobre</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;