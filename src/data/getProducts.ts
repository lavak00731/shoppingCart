const getProducts = async () =>{
    try {
        const response = await fetch('https://dummyjson.com/products?limit=10');
        if(response.ok) {
            const rawResponse = await response;
            const list = await rawResponse.json();
            return list.products;
        }     
    } catch (error) {
        console.log(error)
    }
}
export default getProducts;