// import singleServiceBanner from '../../../assets/Images/banner/singleService.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleServiceBanner = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch(`https://energy-project-server.vercel.app/services/${id}`)
            .then(response => response.json())
            .then(data => setService(data))
            .catch(error => console.error('Error fetching service:', error));
    }, [id]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col justify-between gap-5 m-5 my-20 md:m-20">
            <div className='container p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='grid grid-rows-[auto,auto,1fr,auto] gap-3'>
                        <div>
                            <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">{service.headerTitle}</small>
                        </div>
                        <div>
                            <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">{service.titlePrefix}</h1>
                        </div>
                        <div>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">{service.titleDescription}</p>
                        </div>
                        <div>
                            <button className='service-button'>Request a call</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img
                            src={service.ctaImage}
                            alt={service.headerTitle}
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceBanner;