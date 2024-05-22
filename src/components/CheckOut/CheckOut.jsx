import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import Context from "../../context/CartContext"
import { db } from "../../config/firebase"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const [error, setError] = useState({})

    const {cart, getTotal, clearCart} = useContext(Context)

    const navigate = useNavigate();

    const updateUser = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = "Tienes que completar un nombre"
        } else if (user.name.length < 3) {
            errors.name = "El nombre debe tener al menos 3 caracteres"
        }

        if (!user.email) {
            errors.email = "Tienes que completar un email"
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "El email no es válido"
        }

        if (!user.phone) {
            errors.phone = "Tienes que completar con tu número telefónico"
        } else if (!/^\d{10}$/.test(user.phone)) {
            errors.phone = "El número de teléfono debe tener 10 dígitos"
        }

        if (!user.address) {
            errors.address = "Tienes que completar con tu dirección"
        } else if (user.address.length < 5) {
            errors.address = "La dirección debe tener al menos 5 caracteres"
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async (e)=> {
        e.preventDefault();
        const isFormValid = validateForm()
        if(isFormValid){
            const ordersCollection = collection(db, 'orders')

            try{

                for(const item of cart){
                    const productRef = doc(db, 'products', item.id)
                    const productDoc = await getDoc(productRef)

                    const currentStock = productDoc.data().stock

                    if(currentStock >= item.quantity){
                        await updateDoc(productRef, {
                            stock: currentStock - item.quantity
                        })
                    }else{
                        Swal.fire({
                            title: 'Error',
                            text: `No hay suficiente stock para ${item.name}`,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        return;
                    }

                    const order = { 
                        buyer: user,
                        cart: cart,
                        total: getTotal(),
                    }

                    const orderDocRef = await addDoc(ordersCollection, order)
                    Swal.fire({
                        title: 'Gracias por tu compra',
                        text: `El numero de orden es: ${orderDocRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'Volver a inicio'
                    }).then(()=>{
                        clearCart()
                        navigate('/')
                    })
                    
                }


            }catch(error){
                console.log(error)
            }

        }else{
            console.log("Formulario incompleto:", error);
        }
    }

    return (


        <main className="w-full">
            
            <section className="min-h-screen w-full px-[calc(var(--assets-axis-x)*3)] py-40">
                <div className="rounded-lg border p-10 shadow-sm border-gray-700 bg-gray-800 md:p-16 mx-16">

                    <h2 className="text-xl font-semibold text-white sm:text-2xl mb-8 text-center">
                        Datos de facturación
                    </h2>

                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-white"
                            >
                            Nombre*
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                            onChange={updateUser}
                            />
                            {error.name && <p class="mt-2 text-sm text-red-500"><span class="font-medium">Oops!</span> {error.name}</p>} 
                        </div>
                        <div className="mb-5">
                            <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white"
                            >
                            Email*
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"

                            onChange={updateUser}
                            />
                            {error.email && <p class="mt-2 text-sm text-red-500"><span class="font-medium">Oops!</span> {error.email}</p>} 
                        </div>

                        <div className="mb-5">
                            <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-white"
                            >
                            Teléfono*
                            </label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                            onChange={updateUser}
                            />
                            {error.phone && <p class="mt-2 text-sm text-red-500"><span class="font-medium">Oops!</span> {error.phone}</p>} 
                        </div>

                        <div className="mb-10">
                            <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-white"
                            >
                            Dirección*
                            </label>
                            <input
                            type="text"
                            id="address"
                            name="address"
                            className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                            onChange={updateUser}
                            />
                            {error.address && <p class="mt-2 text-sm text-red-500"><span class="font-medium">Oops!</span> {error.address}</p>} 
                        </div>
                      
                        <div className="flex justify-center">
                            <button
                                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={getOrder}
                            >
                                Finalizar compra
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </main>





    )
}