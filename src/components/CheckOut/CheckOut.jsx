import { Timestamp, addDoc, collection } from "firebase/firestore"
import { useContext, useState } from "react"
import Context from "../../context/CartContext"

export default function CheckOut() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const {error, setError} = useState({})

    const {cart, getTotal} = useContext(Context)

    console.log(cart)

    const updateUser = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name){
            errors.name="Tienes un agregar un nombre"
        }

        setError(errors)
        return object.ket(errors).length === 0
    }

    const getOrder = async ()=> {
        const isFormValid = validateForm()
        if(isFormValid){
            const ordersCollection = collection(db, 'orders')

            const order = { 
                buyer: user,
                cart: cart,
                total: getTotal(),
            }

            const orderDocRef = await addDoc(ordersCollection, order)
            console.log(orderDocRef)
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
                            required
                            onChange={updateUser}
                            />
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
                            required
                            onChange={updateUser}
                            />
                        </div>

                        <div className="mb-5">
                            <label
                            htmlFor="tel"
                            className="block mb-2 text-sm font-medium text-white"
                            >
                            Teléfono*
                            </label>
                            <input
                            type="tel"
                            id="tel"
                            name="tel"
                            className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            onChange={updateUser}
                            />
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
                            required
                            onChange={updateUser}
                            />
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