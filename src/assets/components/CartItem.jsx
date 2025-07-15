import { useState, useContext } from "react";
import { cartContext } from "../cartContext";
import * as styles from './cartItem.module.css'

const CartItem = ({ item }) => {
    const [qtyEdit, setQtyEdit] = useState(item.qty);
    const [canEdit, setCanEdit] = useState(false);
    const { removeItem, updateItemQty } = useContext(cartContext);

    const handleRemove = (id) => {
        removeItem(id)
    }

    const handleEdit = () => {
        setCanEdit(true);
    }

    const handleChange = (e) => {
        let newQtyEdit = parseInt(e.target.value)
        if (!isNaN(newQtyEdit) && newQtyEdit >= 0) {
            setQtyEdit(newQtyEdit)
        } else {
            setQtyEdit(0)
        }        
    }

    const handleUpdate = (id, newQty) => {
        if (newQty === 0) {
            removeItem(id)
        } else {
            setCanEdit(false)
            updateItemQty(id, newQty)
        }
        
    }

    return (
        <div className={styles.cartItemContainer}>
            <img src={item.img} alt={item.title} className={styles.cartItemImg}/>
            <div className={styles.info}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.price}>Price: ${item.price}</p>
            </div>
                {
                !canEdit ? 
                <div className={styles.qtyContainer}><p className={styles.qty}>Qty: {item.qty}</p> <button onClick={() => handleEdit()} className={styles.editButton}>Edit</button></div> : 
                <>
                    <label className={styles.qty}>Qty: 
                        <input 
                            type="number" 
                            name='quantity' 
                            value={qtyEdit} 
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <button onClick={() => handleUpdate(item.id, qtyEdit)} className={styles.updateButton}>Update</button>                
                </>
                }
            <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>Remove</button>
        </div>
        
    )
}

export default CartItem