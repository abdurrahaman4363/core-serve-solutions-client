import '../../../App.css';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 my-20 md:m-20 lg:m-40">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Our Service</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Get a Free Energy <br /> Assessment
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                    We provide top-tier renewable energy solutions tailored to your needs. From solar panel installations and <br /> wind energy systems to efficient energy storage and smart grid technology, our services ensure <br /> sustainability and savings. Partner with us for expert consultation, seamless implementation, and ongoing <br /> support. Power your future with our innovative energy solutions.
                </p>
            </div>

            <div className="mx-10 md:mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.slice(0, 4).map((service) => (
                    <div key={service._id} className="bg-[#F3FAF3] shadow-lg rounded-lg p-4">
                        <img className='w-1/3 h-auto'
                            src={service.ctaImage || heatIcon}
                            alt={service.headerTitle}
                            style={{ borderRadius: '50%' }}
                        />
                        <h1 className="font-sora text-2xl font-semibold mt-2 text-left">{service.titlePrefix}</h1>
                        <button className="bg-[#4CAF50] text-[#F3FAF3] w-full py-2 px-4 rounded-lg mt-2">
                            <Link to={`/single_service/${service._id}`}>Get Service</Link>
                        </button>
                    </div>
                ))}
            </div>

            <div className='text-right'>
                <button className="font-poppins text-xl font-medium leading-[31.5px] text-[#0E2510] mt-5 hover:text-[#16bd3b]">
                    <Link to="/our_service">
                        See More
                        <FontAwesomeIcon icon={faArrowRightLong} className="ml-3" />
                    </Link>
                </button>
            </div>
        </div>


    )
};

export default Service;