import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts"
import ProductCard from "../components/ProductCard";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const items = await fetchProducts();
                setProducts(items);
            } catch (err) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getProducts();

    }, []);

    return (
        <>
            <header>
                <h1>Da best items for sale!</h1>
            </header>
            <main>
                <div className='product-grid'>
                    {loading ? <h2>Loading...</h2> : null}
                    {products.map((product) => {
                        return <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}/>
                    })}
                </div>
            </main>
        </>
        
    )
}

export default Shop