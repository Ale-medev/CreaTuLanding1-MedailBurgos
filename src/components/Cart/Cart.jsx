import { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";


export default function cart(){
    const {cart, getTotal, removeItem, clearCart} = useContext(Context)

    return(

        <main className="w-full">
            
            <section className="min-h-screen w-full px-[calc(var(--assets-axis-x)*3)] py-40">

                {
                    cart.length > 0 ? (
                        <div>

                            <h2 className="text-xl font-semibold text-white sm:text-2xl mb-8">
                                Tu carrito
                            </h2>

                            <div className="flex gap-4 flex-col mb-6">
                                {
                                    cart.map((prod) => (


                                        <article key={prod.id} className="rounded-lg border  p-4 shadow-sm border-gray-700 bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            
                                            <Link to={`/product/${prod.id}`} className="shrink-0 md:order-1">
                                                <img
                                                    className="h-24 w-18 object-cover"
                                                    src={prod.image}
                                                    alt="imac image"
                                                />
                                            </Link>
                            

                            
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                            
                                                <div className="text-base font-medium text-white">
                                                    Cantidad: {prod.quantity}
                                                </div>
                            
                            
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-white">
                                                        ${ (prod.price * prod.quantity).toFixed(2) }
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <Link to={`/product/${prod.id}`}
                                                    href="#"
                                                    className="text-base font-medium hover:underline text-white"
                                                >
                                                {`Poster de: "${prod.title}"`}
                                                </Link>
                                            <div className="flex items-center gap-4">
                                                <button onClick={()=> removeItem(prod.id)}
                                                type="button"
                                                className="inline-flex items-center text-sm font-medium t hover:underline text-red-500"
                                                >
                                                <svg
                                                    className="me-1.5 h-5 w-5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18 17.94 6M18 18 6.06 6"
                                                    />
                                                </svg>
                                                    Remove
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                    </article>
                                    ))
                                }

                                </div>    

                                <div className="space-y-4 rounded-lg border  p-4 shadow-sm border-gray-700 bg-gray-800 sm:p-6">
                                        <p className="text-xl font-semibold text-white">Resumen de orden</p>

                                        <div className="space-y-4">
                                            <dl className="flex items-center justify-between gap-4 border-t pt-2 border-gray-700">
                                            <dt className="text-base font-bold text-white">Total</dt>
                                            <dd className="text-base font-bold text-white">$ {getTotal()}</dd>
                                            </dl>
                                        </div>

                                        <div className="flex justify-center gap-4">
                                            <button onClick={() => clearCart()} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                    Vaciar carrito
                                            </button>

                                            <Link className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to='/checkout'>
                                                Finalizar compra
                                            </Link>
                                        </div>

                                </div>
                        </div>
                    ) : (
                        <h2 className="text-xl font-semibold text-white sm:text-2xl mb-8">
                            Carrito vacio
                        </h2>
                    )
                }

            </section>
       </main>

    
    )
}