import Link from "next/link";
import Botao from "../components/Botao/botao";

const pagina1 = () => {
    return (
        <>
            <h2>Olá</h2>
            <Link href='/'><Botao titulo="Clicar" /></Link>
        </>
    );
}

export default pagina1;