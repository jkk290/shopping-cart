import { useContext } from "react"
import { cartContext } from "../cartContext"
import CartItem from "../components/CartItem"
import * as styles from './cart.module.css'

const Cart = () => {
    const { items } = useContext(cartContext);

    const total = items.reduce((sum, item) => {
        const initialTotal = sum + (item.price * item.qty)
        const roundedString = initialTotal.toFixed(2)
        const roundedTotal = parseFloat(roundedString)
        return roundedTotal
    }, 0.0)

    return (
        <section className={styles.cartContainer}>
            <h1>Cart</h1>
            <div>
                <ul className={styles.cartList}>
                    {items.map((item) => {
                        return (
                            <li key={item.id}>
                                <CartItem item={item}/>
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