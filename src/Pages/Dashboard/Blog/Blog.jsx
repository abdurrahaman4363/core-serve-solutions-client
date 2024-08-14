import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/blogs');
                const fetchedBlogs = response.data.reverse(); // Reverse the array to show the last inserted blog first
                setBlogs(fetchedBlogs);
                if (fetchedBlogs.length > 0) {
                    setSelectedBlog(fetchedBlogs[0]);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    const handleUpdateClick = (blogId) => {
        navigate(`/dashboard/updateBlog/${blogId}`);
    };


    const handleDeleteClick = async (blogId) => {
        try {
            const response = await axios.delete(`https://energy-project-server.vercel.app/blogs/${blogId}`);
            console.log('Blog deleted successfully:', response.data);
            // Optionally, update state or perform any necessary actions after deletion
            const updatedBlogs = blogs.filter(blog => blog._id !== blogId);
            setBlogs(updatedBlogs);
            if (updatedBlogs.length > 0) {
                setSelectedBlog(updatedBlogs[0]);
            } // Clear selected blog after deletion
            else{
                setSelectedBlog(null);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    useEffect(() => {
        if (selectedBlog) {
            console.log('from blog', selectedBlog);
            console.log('from blog sections', selectedBlog?.sections);
            console.log('from blog subTitles', selectedBlog?.subTitles);
        }
    }, [selectedBlog]);

    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 md:grid-cols-3 grid-cols-1">
            {/* Side bar one */}
            <div className="bg-[#FEFEFE] p-5 mr-3 col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
                {selectedBlog ? (
                    <>
                        <h1>Details</h1>
                        <div className='text-center'>
                            <div className='w-full flex justify-center mb-2'>
                                <img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={selectedBlog.ctaImage} alt="" />
                            </div>
                            <h1 className='text-2xl font-bold'>{selectedBlog.headerTitle}</h1>
                            <p>{selectedBlog.titleDescription}</p>
                            <div className='w-full flex justify-center mt-4'>
                                <button className="btn btn-circle bg-black text-white" onClick={() => handleUpdateClick(selectedBlog._id)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-circle bg-black text-white mx-3" onClick={() => handleDeleteClick(selectedBlog._id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>Header</h1>

                            <p><span className='text-[#64748B] font-bold'>Prefix of title</span> : {selectedBlog.titlePrefix}</p>
                            <p><span className='text-[#64748B] font-bold'>Title</span> : {selectedBlog.headerTitle}</p>
                            <p><span className='text-[#64748B] font-bold'>Author</span> : {selectedBlog.author}</p>
                            <p><span className='text-[#64748B] font-bold'>Description</span> : {selectedBlog.titleDescription}</p>
                            <p><span className='text-[#64748B] font-bold'>CTA</span> : {selectedBlog.cta}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>1st Section</h1>
                            {selectedBlog.sections.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedBlog.sections.map((section, index) => (
                                        <li key={index} className='mb-4'>
                                            <p><span className='text-[#64748B] font-bold'>Prefix of title</span>: {section.prefix}</p>
                                            <p><span className='text-[#64748B] font-bold'>Title</span>: {section.title}</p>
                                            <p><span className='text-[#64748B] font-bold'>Description</span>: {section.description}</p>
                                            <p><span className='text-[#64748B] font-bold'>CTA</span>: {section.cta}</p>
                                            <img src={section.ctaImage} alt="Section" className="w-full" />
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No sections available</p>
                            )}
                        </div>
                        <div className='mt-4'>
                            {selectedBlog.subTitles.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedBlog.subTitles.map((subtitle, index) => (
                                        <li key={index} className='mb-4'>
                                            <p><span className='text-[#64748B] font-bold'>Sub title</span>: {subtitle.subTitle}</p>
                                            <p><span className='text-[#64748B] font-bold'>Sub title description</span>: {subtitle.subTitleDescription}</p>
                                            <p><span className='text-[#64748B] font-bold'>CTA</span>: {subtitle.cta}</p>
                                            <img src={subtitle.ctaImage} alt="Subtitle" className="w-full" />
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
                        <h1 className="text-2xl font-bold">Select a Blog</h1>
                    </div>
                )}
            </div>
            {/* Side bar two */}
            <div className="bg-[#FEFEFE] p-5 col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
                <h1>Blogs</h1>
                <div>
                    {blogs.map((blog) => (
                        <div key={blog._id} className='grid grid-cols-3 gap-5 mt-5 items-center cursor-pointer' onClick={() => handleBlogClick(blog)}>
                            <div className='flex justify-center'>
                                <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={blog.ctaImage} alt="" />
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <p className='text-xl font-bold'>{blog.titlePrefix}</p>
                            </div>
                        </div>
                    ))}
                    <div className='bg-[#E8EFFF] text-center p-5 my-4'>
                        <Link to="/dashboard/upload">
                            <button className="btn btn-circle bg-black text-white mx-3">
                                <FaPlus />
                            </button>
                            <p>Add Blog</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
