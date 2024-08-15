import { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
    const [products, setProducts] = useState([]);
    const axiosPublic= useAxiosPublic();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosPublic.get('/products');
                setProducts(response.data);
                console.log('Fetched Products:', response.data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ShopCard
                        key={product._id}
                        brandName={product?.brandName}
                        category={product?.category}
                        dateAndTime={product?.creationDate}
                        description={product?.description}
                        price={product?.price}
                        image={product?.productImage}
                        title={product?.productName}
                        />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
