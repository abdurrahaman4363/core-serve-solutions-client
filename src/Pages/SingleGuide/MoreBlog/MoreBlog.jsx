import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const MoreBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-10 my-10 md:mx-40 md:my-20">
            <div className="mb-5 mt-10">
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Explore more blog
                </h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    {blogs.slice(0, 3).map(blog => (
                        <div key={blog._id} className='card shadow-xl no-rounded bg-[#4CAF50]'>
                            <figure className='no-rounded'>
                                <img
                                    src={blog.ctaImage}
                                    alt={blog.headerTitle}
                                    className="h-[398px] w-full rounded-none"
                                />
                            </figure>
                            <div className="flex flex-col items-center text-center p-4">
                                <h2 className="font-sora text-2xl font-semibold leading-[57.6px] text-[#FEFEFE]">{blog.headerTitle}</h2>
                                <p className="font-poppins text-base text-[#F5F5F5] mt-4 mb-8 leading-relaxed">
                                    {truncateDescription(blog.titleDescription, 20)}
                                </p>
                                <div className='mb-3'>
                                    <button className="bg-white text-[#0E2510] px-4 py-2 rounded-lg">
                                        <Link to={`/single_guide/${blog._id}`}>Read More</Link>
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

export default MoreBlog;