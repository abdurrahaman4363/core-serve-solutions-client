import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogHeader = () => {
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
        <div className="flex flex-col justify-between gap-5 mx-10 my-10 md:mx-40 md:my-40">
            {blog.subTitles && blog.subTitles.length > 0 && (
                <div className="text-left mt-4">
                    {blog.subTitles.map((subTitle, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-left ">
                                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                                    {subTitle.subTitlePrefix}
                                </h1>
                            </div>
                            <div className="text-left">
                                <p className="text-[#6D6D6D]">{subTitle.subTitleDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }

            {blog.sections && blog.sections.length > 0 && (
                <div className="flex flex-col justify-between gap-5 my-10 md:my-20">
                    {blog.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-left">
                                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                                    {section.prefix}
                                </h1>
                            </div>
                            <div className="text-left">
                                <p className="text-[#6D6D6D]">{section.description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div >
            )
            }

        </div >
    );
};

export default BlogHeader;