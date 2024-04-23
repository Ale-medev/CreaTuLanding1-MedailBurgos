import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export default function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()


        dataProducts
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    },[categoryId])


    return (
        <main className="w-full">
            <section className="min-h-screen w-full px-[var(--assets-axis-x)] py-40">
                <h1 className="font-bold text-7xl text-center text-white mb-20">{greeting}</h1>

                <ItemList products={products} />
            </section>
        </main>
    )
}