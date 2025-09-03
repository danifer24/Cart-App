import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/NavBar";



export const CartApp = () => {

    const { cartItems, addToCart, deleteProduct } = useItemsCart();

    return (
        <>  
            <Navbar/>
            <div className="container my-4">

                <h3>Cart App</h3>
                <Routes>
                    <Route
                        path="catalog"
                        element={<CatalogView handler={addToCart} />} />
                    <Route
                        path="cart"
                        element={(
                            cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay protucto en el carrito de compras!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CartView cartItems={cartItems} handlerDelete={deleteProduct} />
                                </div>
                            )
                        )} />

                    <Route path="/" element={ <Navigate to={ '/catalog' } /> } />

                </Routes>




            </div>
        </>
    )
}