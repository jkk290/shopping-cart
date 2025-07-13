import { useState, useContext } from "react"
import { cartContext } from "../cartContext";

const ProductCard = ({ title, image, price }) => {
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
            title: title,
            price: price,
            qty: qty,
            img: image
        };

        addItem(product);
        console.log('Adding item ', product)
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
        <div className='product-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => increaseQty()}>+</button>
            <label>Quantity </label>
            <input 
                type="number" 
                value={qty}
                onChange={(e) => handleChange(e)} 
            />
            <button onClick={() => decreaseQty()}>-</button>
            <button onClick={() => handleSubmit()}>Add to cart</button>
        </div>
    )   
}

export default ProductCard