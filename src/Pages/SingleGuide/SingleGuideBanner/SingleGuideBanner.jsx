import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleGuideBanner = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://energy-project-server.vercel.app/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error fetching blog:', error));
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }


    return (
        <div className="flex flex-col justify-between gap-5 m-5 my-20 md:m-20">
            <div className='container p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <div className='m-3'>
                            <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">{blog.headerTitle}</small>
                        </div>
                        <div className='m-3'>
                            <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">{blog.titlePrefix}</h1>
                        </div>
                        <div className='font-bold m-3'>
                            {/* <h1>By {blog.author} / {new Date(blog.date).toLocaleDateString()}</h1> */}
                            <h1>By {blog.author} </h1>
                        </div>
                        <div className='m-3'>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                                {blog.titleDescription}
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                            src={blog.ctaImage}
                            alt="mission-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGuideBanner;