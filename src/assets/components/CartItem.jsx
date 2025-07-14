import { useState, useContext } from "react";
import { cartContext } from "../cartContext";

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
        <>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            {
                !canEdit ? 
                <p>Qty: {item.qty} <button onClick={() => handleEdit()}>edit</button></p> : 
                <>
                    <input 
                    type="number" 
                    value={qtyEdit} 
                    onChange={(e) => handleChange(e)}
                    />
                    <button onClick={() => handleUpdate(item.id, qtyEdit)}>Update</button>                
                </>
            }
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove from cart</button>
        </>
        
    )
}

export default CartItem