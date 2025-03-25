'use client'

import { useParams } from "next/navigation";

const ProductPage = () => {

    const param = useParams();
    
    return (
        <>
            <h1>Produto ID: { param.id }</h1>
        </>
    );
}

export default ProductPage;