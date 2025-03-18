import Image from "next/image"
import Link from "next/link"

import gatinho from '@/images/gato.jpg'

function Produto() {
    return (
        <>
            <h1>Produtos</h1>
            <Link href="#">
                <Image src="/cachorro.jfif" alt='Imagem' height={200} width={200} />

                <Image src={gatinho} alt='Imagem' height={200} width={200} />
            </Link>
        </>
    )
}

export default Produto