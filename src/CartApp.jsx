import { useReducer } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialItems = JSON.parse(sessionStorage.getItem('cartTotal')) || [];

export const CartApp = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialItems);

    const addToCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id)
        if (hasItem) {
            dispatch(
                {
                    type: 'UpdateQuantityProductCart',
                    payload: product,
                }
            );
        } else {
            dispatch(
                {
                    type: 'AddProductCart',
                    payload: product,
                }
            );
        }

    }

    const DeleteProduct = (id) => {
        dispatch(
            {
                type: 'DeleteProductCart',
                payload: id,
            }
        )
    }

    return (
        <>
            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={addToCart} />

                {cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView cartItems={cartItems} handlerDelete={DeleteProduct} />
                        </div>
                    )}

            </div>
        </>
    )
}