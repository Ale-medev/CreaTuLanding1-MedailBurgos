import { useState } from "react";

export default function ItemCount({stock, initial, onAdd}){
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    
    const handleAdd = () => {
        onAdd(quantity);
    };

    const isOutOfStock = stock === 0;

    return(
        <div className="flex gap-4">
            <div className="flex gap-6 items-center">
                <button className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={decrement}>-</button>
                <span className="text-sm text-white">{quantity}</span>
                <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 f font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={increment}>+</button>
            </div>
            <div>
                <button
                        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                            isOutOfStock
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                        }`}
                        onClick={handleAdd}
                        disabled={isOutOfStock}
                    >
                        {isOutOfStock ? "Sin stock" : "Agregar al carrito"}
                    </button>
            </div>
        </div>
    )
}