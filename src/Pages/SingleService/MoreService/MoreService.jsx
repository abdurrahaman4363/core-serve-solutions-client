import { Link } from 'react-router-dom';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import { useEffect, useState } from 'react';

const MoreService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 md:m-20 lg:m-40">
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Explore more <br /> service
                </h1>
            </div>

            <div>
                <div className="mx-10 md:mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.slice(0, 4).map(service => (
                        <div key={service._id} className="bg-[#F3FAF3] shadow-lg rounded-lg p-4">
                            <img className='w-1/3 h-auto'
                                src={service.ctaImage || heatIcon}
                                alt={service.headerTitle}
                                style={{ borderRadius: '50%' }}
                            />
                            <h1 className="font-sora text-2xl font-semibold mt-2 text-left">{service.titlePrefix}</h1>
                            {/* <p className='text-gray-700 mb-5'>{service.titleDescription}</p> */}
                            <button className="bg-[#4CAF50] text-[#F3FAF3] w-full py-2 px-4 rounded-lg mt-2">
                                <Link to={`/single_service/${service._id}`}>Get Service</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoreService;