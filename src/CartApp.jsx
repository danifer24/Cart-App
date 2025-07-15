import { CartView } from "./components/CartView";
export const CartApp = () => {

    
    return(
        <>
        
        <div>
            
            <h3>Cart App</h3>
            <CartView/>

            <div className="my-4 w-50">
                <h3>Carrito de Compras</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total Carrito:</td>
                            <td colSpan="2" className="text-start fw-bold">1000€</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        </>
    )
}