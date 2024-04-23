import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(res => setProduct(res))
            .catch(error => console.error(error))
    }, [productId])

    return(
        <main className="w-full">
             <section className="min-h-screen w-full px-[calc(var(--assets-axis-x)*3)] py-40"><ItemDetail {...product} />
             </section>
        </main>
    )
}

