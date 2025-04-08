import CountBot from "@/app/BotCount/botcout";
import { notFound } from "next/navigation";
import { use } from "react";

const produtos = ["milka", "belga", "nestle"]

interface Params {
    params: Promise<{ produto?: string }>
}

const Products = ({ params }: Params) => {

    const resolvedProduto = use(params);
    const produto = resolvedProduto?.produto || "";

    if (!produto || !produtos.includes(produto)) {
        notFound()
    }
    if (produto == produtos[0]) {
        <p>Descrição milka</p>
    }
    else if (produto == produtos[1]) {
        <p>Descrição Belga</p>
    }
    else if (produto == produtos[2]) {
        <p>Descrição </p>
    }
    else (
        alert("Tá tudo errado")
    )
    return (
        <>
            <h1>Produto {produto}</h1>
            
            <CountBot/>
        </>
    );
}
export default Products;