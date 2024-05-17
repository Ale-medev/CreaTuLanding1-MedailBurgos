import { useEffect, useState, useContext } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Context from "../../context/CartContext"
import { db } from "../../config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export default function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{

        const getData = async ()=>{
            const coleccion = collection(db, 'products')

            const queryRef = !categoryId ? 
                coleccion 
                :
                query(coleccion, where('category', '==', categoryId))
            
                const res = await getDocs(queryRef)

                const products = res.docs.map((doc) => {
                    const newItem = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return newItem
                })

                setProducts(products)
                
        }
        getData()

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