import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const MoreProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 my-20 md:m-20 lg:m-40">
            <div className="mb-12">
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Explore more products
                </h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    {products.slice(0, 3).map(product => (
                        <div key={product._id} className="bg-[#4CAF50] shadow-xl rounded-none">
                            <figure className="rounded-none">
                                <img
                                    src={product.ctaImage}
                                    alt={product.headerTitle}
                                    className="h-[398px] w-full rounded-none" />
                            </figure>
                            <div className="flex flex-col items-center text-center p-4">
                                <h2 className="font-sora text-2xl font-semibold leading-[57.6px] text-[#FEFEFE]">{product.titlePrefix}</h2>
                                {/* <p className='card-description'>{product.titleDescription}</p> */}
                                <p className="font-poppins text-base text-[#F5F5F5] mt-4 mb-8 leading-relaxed">
                                    {truncateDescription(product.titleDescription, 15)}
                                </p>
                                <div className="mb-3">
                                    <button className="bg-white text-[#0E2510] px-4 py-2 rounded-lg">
                                        <Link to={`/single_product/${product._id}`}>Learn More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MoreProduct;