import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/products');
                const fetchedProducts = response.data.reverse(); // Reverse the array to show the last inserted product first
                setProducts(fetchedProducts);
                if (fetchedProducts.length > 0) {
                    setSelectedProduct(fetchedProducts[0]);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleUpdateClick = (productId) => {
        navigate(`/dashboard/updateProducts/${productId}`);
    };

    const handleDeleteClick = async (productId) => {
        try {
            const response = await axios.delete(`https://energy-project-server.vercel.app/products/${productId}`);
            console.log('Product deleted successfully:', response.data);
            const updatedProducts = products.filter(product => product._id !== productId);
            setProducts(updatedProducts);
            if (updatedProducts.length > 0) {
                setSelectedProduct(updatedProducts[0]);
            } else {
                setSelectedProduct(null);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 md:grid-cols-3 grid-cols-1">
            {/* Side bar one */}
            <div className="bg-[#FEFEFE] p-5 mr-3 col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
                {selectedProduct ? (
                    <>
                        <h1>Details</h1>
                        <div className='text-center'>
                            <div className='w-full flex justify-center mb-2'>
                                <img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={selectedProduct.ctaImage} alt="" />
                            </div>
                            <h1 className='text-2xl font-bold'>{selectedProduct.headerTitle}</h1>
                            <p>{selectedProduct.titleDescription}</p>
                            <div className='w-full flex justify-center mt-4'>
                                <button className="btn btn-circle bg-black text-white" onClick={() => handleUpdateClick(selectedProduct._id)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-circle bg-black text-white mx-3" onClick={() => handleDeleteClick(selectedProduct._id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>Header</h1>
                            <p><span className='text-[#64748B] font-bold'>Prefix of title</span> : {selectedProduct.titlePrefix}</p>
                            <p><span className='text-[#64748B] font-bold'>Title</span> : {selectedProduct.headerTitle}</p>
                            <p><span className='text-[#64748B] font-bold'>Description</span> : {selectedProduct.titleDescription}</p>
                            <p><span className='text-[#64748B] font-bold'>Product details</span> : {selectedProduct.details}</p>
                            <p><span className='text-[#64748B] font-bold'>CTA</span> : {selectedProduct.cta}</p>
                            {selectedProduct.ctaImage && <img src={selectedProduct.ctaImage} alt="CTA" className="w-full" />}
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>1st Section</h1>
                            {selectedProduct.sections && selectedProduct.sections.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedProduct.sections.map((section, index) => (
                                        <li key={index} className='mb-4'>
                                            <p><span className='text-[#64748B] font-bold'>Prefix of title</span>: {section.prefix}</p>
                                            <p><span className='text-[#64748B] font-bold'>Title</span>: {section.title}</p>
                                            <p><span className='text-[#64748B] font-bold'>Description</span>: {section.description}</p>
                                            <p><span className='text-[#64748B] font-bold'>CTA</span>: {section.cta}</p>
                                            {section.ctaImage && <img src={section.ctaImage} alt="Section" className="w-full" />}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No sections available</p>
                            )}
                        </div>
                        <div className='mt-4'>
                            { /* <h1 className='text-2xl font-bold'>Subtitle Section</h1> */}
                            {selectedProduct.subTitles && selectedProduct.subTitles.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedProduct.subTitles.map((subtitle, index) => (
                                        <li key={index} className='mb-4'>
                                            <p><span className='text-[#64748B] font-bold'>Sub title</span>: {subtitle.subTitle}</p>
                                            <p><span className='text-[#64748B] font-bold'>Sub title description</span>: {subtitle.subTitleDescription}</p>
                                            <p><span className='text-[#64748B] font-bold'>CTA</span>: {subtitle.cta}</p>
                                            {subtitle.ctaImage && <img src={subtitle.ctaImage} alt="Subtitle" className="w-full" />}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No subtitles available</p>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Select a Product</h1>
                    </div>
                )}
            </div>
            {/* Side bar two */}
            <div className="bg-[#FEFEFE] p-5 col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
                <h1>Products</h1>
                <div>
                    {products.map((product) => (
                        <div key={product._id} className='grid grid-cols-3 gap-5 mt-5 items-center cursor-pointer' onClick={() => handleProductClick(product)}>
                            <div className='flex justify-center'>
                                <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={product.ctaImage} alt="" />
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <p className='text-xl font-bold'>{product.titlePrefix}</p>
                            </div>
                        </div>
                    ))}
                    <div className='bg-[#E8EFFF] text-center p-5 my-4'>
                        <Link to="/dashboard/upload">
                            <button className="btn btn-circle bg-black text-white mx-3">
                                <FaPlus />
                            </button>
                            <p>Add Product</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
