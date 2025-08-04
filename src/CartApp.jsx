import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialItems = JSON.parse(sessionStorage.getItem('cartTotal')) || [];

export const CartApp = () => {
    console.log(initialItems);
    const [cartItems, setCartItems] = useState(initialItems);

    const addToCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id)
        if (hasItem) {
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
        } else {
            setCartItems([...cartItems, {
                product,
                quantity: 1,
            }]);
        }

    }

    const handlerDeleteProduct = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ])
    }

    return (
        <>
            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={addToCart} />

                {cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView cartItems={cartItems} handlerDelete={handlerDeleteProduct} />
                        </div>
                    )}

            </div>
        </>
    )
}