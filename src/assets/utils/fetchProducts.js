export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('There was an error fetching products:', error);
        throw error;
    }
}