import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/NavBar";
import { CartRoutes } from "./routes/cartRoutes";



export const CartApp = () => {

    const { cartItems, addToCart, deleteProduct } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    addToCart={addToCart}
                    deleteProduct={deleteProduct}
                />
            </div>
        </>
    )
}