import { Link } from "react-router-dom";

export default function CardItem({id, title, image, price, stock}){

    return(

        <article className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative overflow-auto">
            <div className="w-full h-full">
                <img className="rounded-t-lg w-full h-full object-cover" src={image} alt={'poster: ' + title} />
            </div>
            <div className="p-5 absolute bottom-0 w-full backdrop-blur-sm bg-black/60 border-b-slate-900 border-b-0 flex flex-col gap-2">
                <Link to={`/product/${id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                </Link>
                    

                <div className="flex items-center">      
                    <span
                        className={`text-xs font-semibold rounded p-1 ${
                            stock > 0
                                ? "bg-indigo-200 text-indigo-800"
                                : " bg-gray-200 text-gray-800"
                        }`}
                    >
                        {stock > 0 ? "Hay stock" : "Sin stock"}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">${price != null ? price.toFixed(2) : "0.00"}</span>
                    <Link className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to={`/product/${id}`}>Ver detalle</Link>
                </div>
            </div>
        </article>


    )
}