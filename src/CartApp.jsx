import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialItems = [
    // {
    //     product: {},
    //     quantity: 0,
    //     total: 0    
    // }
]

export const CartApp = () => {

    const [ cartItems, setCartItems ] = useState(initialItems);

    const addToCart = (product) => {
        setCartItems([...cartItems, {
            product,
            quantity: 1,
            total: product.price * 1
        }]);
    }

    return (
        <>
            <div>

                <h3>Cart App</h3>
                <CatalogView handler={addToCart} />

                <div className="my-4 w-50">
                    <CartView cartItems={cartItems} />
                </div>
            </div>
        </>
    )
}