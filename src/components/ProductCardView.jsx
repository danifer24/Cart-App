import React from 'react'

export const ProductCardView = ({ handler, id, name, description, price }) => {

    const onAddToCart = (product) => {
        console.log("Producto añadido al carrito:", product);
        handler(product);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}€</p>
                    <button className="btn btn-primary"
                        onClick={() => onAddToCart({ id, name, description, price }) }>Añadir al carrito</button>
                </div>
            </div>
        </>
    )
}
