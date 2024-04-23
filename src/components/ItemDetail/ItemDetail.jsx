import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({id, title, image, category, shortDescription, price, stock}){
    return(
        <div className="flex justify-between">
            <div className="w-6/12 flex">
                <div className="mr-20 overflow-hidden rounded-lg">
                    <img className="h-full " src={image} alt={'poster: ' + title} />
                </div>
            </div>
            <div className="w-6/12 pt-10">
                <div>
                    <div className="text-xs font-semibold rounded bg-indigo-200 text-indigo-800 p-1 w-max mb-4">
                            {category}
                    </div>
                    <h5 className="text-5xl font-semibold tracking-tight text-white mb-8">{title}</h5>
                </div>  
                <div className="text-4xl font-bold text-white mb-4">${price}</div>
                <div className="text-xs font-semibold text-white mb-4">
                        stock: {stock}
                </div> 
                <div className="mb-10">

                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ',quantity)}/>

                </div>

                <p className="text-white">{shortDescription}</p>


            </div>
        </div>
    )
}