import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";


export default function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    const { productId } = useParams()


    useEffect(() => {
        const getProduct = async()=> {
            const queryRef = doc(db, 'products', productId)
            const res = await getDoc(queryRef)
            const newItem = {
                ...res.data(),
                id: res.id
            }
            setProduct(newItem)
        }
        getProduct()

    }, [productId])

    return(
        <main className="w-full">
             <section className="min-h-screen w-full px-[calc(var(--assets-axis-x)*3)] py-40">
                <ItemDetail {...product} />
             </section>
        </main>
    )
}

