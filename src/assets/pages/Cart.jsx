import { useContext } from "react";
import { cartContext } from "../cartContext";

const Cart = () => {
    const { items } = useContext(cartContext);

    const total = items.reduce((sum, item) => {
        return sum + (item.price * item.qty)
    }, 0.0)

    return (
        <section>
            <h1>Cart</h1>
            <div>
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.title}>
                                <img src={item.img} alt={item.title} />
                                <p>{item.title}</p>
                                <p>Qty: {item.qty}</p>
                                <p>Price: ${item.price}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <p>Total: ${total}</p>
        </section>        
    )
}

export default Cart;