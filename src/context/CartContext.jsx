import React, { createContext, useState } from "react";

const Context = createContext()

export function ContextProvider({ children }){
    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd,
            quantity,
            
        }
        if(isInCart(newProduct.id)){
            const updatedCart = cart.map((item) =>{
                if(item.id === newProduct.id){
                    return {...item, quantity: item.quantity + newProduct.quantity}
                }
                return item
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, newProduct])
        }

        
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id ===id)
    }

    const removeItem = (id)=>{
        const deleteItem = cart.filter((prod) => prod.id !== id)
        setCart([...deleteItem])
    }

    const getTotal = () =>{
        const total = cart.reduce((acc, item)=> acc + item.price * item.quantity, 0)
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = ()=> {
        let total = 0
        cart.forEach((prod) =>{
            total = total + prod.quantity
        })

        return total
    }

    console.log(cart)
    console.log(getQuantity())

    return(
        <Context.Provider 
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                getQuantity,
                getTotal
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context