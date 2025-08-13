import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";



export const CartApp = () => {

    const { cartItems, addToCart, deleteProduct } = useItemsCart();

    return (
        <>
            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={addToCart} />

                {cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView cartItems={cartItems} handlerDelete={deleteProduct} />
                        </div>
                    )}

            </div>
        </>
    )
}