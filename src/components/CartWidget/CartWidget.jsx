import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";

export default function CartWidget() {
    const {getQuantity} = useContext(Context)
    const quantity = getQuantity();
    const textColorClass = quantity === 0 ? 'text-gray-700 group-hover:text-gray-800' : 'text-white group-hover:text-slate-300';
    const tooltipColorClass = quantity === 0 ? 'opacity-0 invisible' : 'opacity-1 visible';

    return (
        <Link to="/cart" className="group -m-2 flex items-center p-2 relative">
            <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
            </svg>
            <span className={`ml-2 text-sm font-medium ${textColorClass} `}>
                {quantity}
            </span>

            <div className={`${tooltipColorClass} w-max transition duration-300 ease-out absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm tooltip bg-gray-700 top-full group-hover:bg-gray-500 -right-5`}>
                Ir al carrito
            </div>
        </Link>

        
    )
}