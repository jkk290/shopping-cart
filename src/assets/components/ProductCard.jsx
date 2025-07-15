import { useState, useContext } from "react"
import { cartContext } from "../cartContext"
import * as styles from './productCard.module.css'

const ProductCard = ({ id, title, image, price }) => {
    const [qty, setQty] = useState(1);
    const { addItem } = useContext(cartContext);

    const increaseQty = () => {
        setQty((prevQty) => prevQty += 1);
    };

    const decreaseQty = () => {
        setQty((prevQty) => { 
            if (prevQty === 1) {
                return 1;
            } else {
                prevQty -= 1;
                return prevQty;
            }
        });
    };

    const handleSubmit = () => {
        const product = {
            id: id,
            title: title,
            price: price,
            qty: qty,
            img: image
        };
        addItem(product);
    };

    const handleChange = (e) => {
        let newQty = parseInt(e.target.value)
        if (!isNaN(newQty) && newQty >= 1) {
            setQty(newQty)
        } else {
            setQty(1)
        }        
    }

    return (
        <div className={styles.productCard}>
                <img src={image} alt={title} className={styles.productCardImg}/>
            <div className={styles.mainContainer}>
                <div className={styles.info}>
                    <h3>{title}</h3>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <div className={styles.qty}>
                <label>Quantity:  
                <input
                    name='quantity' 
                    type='number' 
                    value={qty}
                    onChange={(e) => handleChange(e)} 
                />
                </label>
                <button onClick={() => increaseQty()} className={styles.qtyButton}>+</button>
                <button onClick={() => decreaseQty()} className={styles.qtyButton}>-</button>
            </div>
            <button onClick={() => handleSubmit()} className={styles.addButton}>Add to cart</button>
        </div>
    )   
}

export default ProductCard