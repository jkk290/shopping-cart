import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts"
import ProductCard from "../components/ProductCard"
import * as styles from './shop.module.css'

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
            <section>
                <h1>Da best items for sale!</h1>
                <div className={styles.productGrid}>
                    {loading ? <h2 className={styles.loading}>Loading...</h2> : null}
                    {products.map((product) => {
                        return <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}/>
                    })}
                </div>
            </section>
        </>
        
    )
}

export default Shop