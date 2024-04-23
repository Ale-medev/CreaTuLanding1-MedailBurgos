
import CardItem from "../CardItem/CardItem"

export default function ItemList({products}){
    return(
        <div className="grid grid-cols-4 gap-6">
            {products.map(prod => <CardItem key={prod.id} {...prod} /> )}
        </div>
    )
}