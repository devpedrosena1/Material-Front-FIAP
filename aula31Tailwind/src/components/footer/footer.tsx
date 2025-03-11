import Link from "next/link";

const footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white text-center">
                <p>&copy; 2025. Direitos Reservados</p>
                <nav>
                    <Link href="/" className="text-blue-400 mx-2 hover:text-yellow-400">Home</Link>
                    <Link href="#" className="text-blue-400 mx-2 hover:text-yellow-400">Sobre</Link>
                    <Link href="#" className="text-blue-400 mx-2 hover:text-yellow-400">Contato</Link>
                </nav>
            </footer>
        </>
    );
}

export default footer;