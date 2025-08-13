import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialItems = JSON.parse(sessionStorage.getItem('cartTotal')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialItems);

    useEffect(() => {
            sessionStorage.setItem('cartTotal', JSON.stringify(cartItems));
        }, [cartItems]);

    const addToCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id)
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        } else {
            dispatch(
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
        }

    }

    const deleteProduct = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return{
        cartItems,
        addToCart,
        deleteProduct
    }

}