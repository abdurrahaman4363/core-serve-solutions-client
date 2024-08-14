import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductBanner = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://energy-project-server.vercel.app/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col justify-between gap-5 m-5 my-20 md:m-20">
            <div className='container mx-auto p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='grid grid-rows-[auto,auto,1fr,auto] gap-3'>
                        <div className='mb-5'>
                            <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">{product.headerTitle}</small>
                        </div>
                        <div>
                            <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">{product.titlePrefix}</h1>
                        </div>
                        <div>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">{product.titleDescription}</p>
                        </div>
                        <div className='mt-10'>
                            <button className='service-button'>Request a call</button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img
                            src={product.ctaImage}
                            alt={product.headerTitle}
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductBanner;