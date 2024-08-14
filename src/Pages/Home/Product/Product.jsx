import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {

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
        <div className="text-center flex flex-col justify-between gap-5 m-5 md:m-20 lg:m-40">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Our Products</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Discover Our Best Solutions <br /> for You
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                    Discover our cutting-edge energy solutions designed for efficiency and sustainability. From advanced solar panels to
                    <br /> innovative wind turbines and energy storage systems, [Company Name] offers reliable products to power a greener future.
                    <br /> Lower costs, reduce your carbon footprint, and embrace energy independence with our state-of-the-art technology.
                    <br /> Explore our range and start your journey towards sustainable energy today.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.slice(0, 3).map((product) => (
                        <div key={product._id} className="bg-[#4CAF50] shadow-xl rounded-none">
                            <figure className="rounded-none">
                                <img
                                    src={product.ctaImage}
                                    alt={product.headerTitle}
                                    className="h-[398px] w-full rounded-none"
                                />
                            </figure>
                            <div className="flex flex-col items-center text-center p-4">
                                <h2 className="font-sora text-2xl font-semibold leading-[57.6px] text-[#FEFEFE]">{product.titlePrefix}</h2>
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

            <div className='text-right'>
                <button className="font-poppins text-xl font-medium leading-[31.5px] text-[#0E2510] mt-5 hover:text-[#16bd3b]">
                    <Link to="/our_product">
                        See More
                        <FontAwesomeIcon icon={faArrowRightLong} className="ml-3" />
                    </Link>
                </button>
            </div>
        </div>

    );
};

export default Product;