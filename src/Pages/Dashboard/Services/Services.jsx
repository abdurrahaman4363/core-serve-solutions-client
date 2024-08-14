import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/services');
                const fetchedServices = response.data.reverse(); // Reverse the array to show the last inserted service first
                setServices(fetchedServices);
                if (fetchedServices.length > 0) {
                    setSelectedService(fetchedServices[0]);
                }
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleUpdateClick = (servicesId) => {
        navigate(`/dashboard/updateServices/${servicesId}`);
    };
    const handleDeleteClick = async (servicesId) => {
        try {
            const response = await axios.delete(`https://energy-project-server.vercel.app/services/${servicesId}`);
            console.log('Service deleted successfully:', response.data);
            // Optionally, update state or perform any necessary actions after deletion
            const updatedServices = services.filter(blog => blog._id !== servicesId);
            setServices(updatedServices);
            if (updatedServices.length > 0) {
                setSelectedService(updatedServices[0]);
            } // Clear selected blog after deletion
            else{
                setSelectedService(null);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };


    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 md:grid-cols-3 grid-cols-1">
            {/* Side bar one */}
            <div className="bg-[#FEFEFE] p-5 mr-3 col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
                {selectedService ? (
                    <>
                        <h1>Details</h1>
                        <div className='text-center'>
                            <div className='w-full flex justify-center mb-2'>
                                <img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={selectedService.ctaImage} alt="" />
                            </div>
                            <h1 className='text-2xl font-bold'>{selectedService.headerTitle}</h1>
                            <p>{selectedService.titleDescription}</p>
                            <div className='w-full flex justify-center mt-4'>

                                <button className="btn btn-circle bg-black text-white" onClick={() => handleUpdateClick(selectedService._id)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-circle bg-black text-white mx-3" onClick={() => handleDeleteClick(selectedService._id)}>
                                    <FaTrash />
                                </button>

                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>Header</h1>
                            <p><span className='text-[#64748B] font-bold'>Prefix of title</span> : {selectedService.titlePrefix}</p>
                            <p><span className='text-[#64748B] font-bold'>Title</span> : {selectedService.headerTitle}</p>
                            <p><span className='text-[#64748B] font-bold'>Description</span> : {selectedService.titleDescription}</p>
                            <p><span className='text-[#64748B] font-bold'>Service details</span> : {selectedService.details}</p>
                            <p><span className='text-[#64748B] font-bold'>CTA</span> : {selectedService.cta}</p>
                            {selectedService.ctaImage && <img src={selectedService.ctaImage} alt="CTA" className="w-full" />}
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>1st Section</h1>
                            {selectedService.sections.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedService.sections.map((section, index) => (
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
                            {selectedService.subTitles.length > 0 ? (
                                <ul className="list-disc ml-8">
                                    {selectedService.subTitles.map((subtitle, index) => (
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
                        <h1 className="text-2xl font-bold">Select a Service</h1>
                    </div>
                )}
            </div>
            {/* Side bar two */}
            <div className="bg-[#FEFEFE] p-5 col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
                <h1>Services</h1>
                <div>
                    {services.map((service) => (
                        <div key={service._id} className='grid grid-cols-3 gap-5 mt-5 items-center cursor-pointer' onClick={() => handleServiceClick(service)}>
                            <div className='flex justify-center'>
                                <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={service.ctaImage} alt="" />
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <p className='text-xl font-bold'>{service.titlePrefix}</p>
                            </div>
                        </div>
                    ))}
                    <div className='bg-[#E8EFFF] text-center p-5 my-4'>
                        <Link to="/dashboard/upload">
                            <button className="btn btn-circle bg-black text-white mx-3">
                                <FaPlus />
                            </button>
                            <p>Add Service</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
