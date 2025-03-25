import { use } from "react";
import { notFound } from "next/navigation";

const usuarios = ["joao", "maria", "anna"]

interface Params {
    params : Promise<{usuario ?: string}>
}

const PerfilUsuarios = ({ params } : Params) => {

    const resolvedUsuario = use(params);
    const usuario = resolvedUsuario?.usuario || "";

    if(!usuario || !usuarios.includes(usuario)) {
        NotFound()
    }

    return (
        <>
            <h1>Perfil de {usuario}</h1>
        </>
    );
}

export default PerfilUsuarios;