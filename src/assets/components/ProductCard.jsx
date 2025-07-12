const ProductCard = ({ title, image, price }) => {
    return (
        <div className='product-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Price: {price}</p>
        </div>
    )   
}

export default ProductCard