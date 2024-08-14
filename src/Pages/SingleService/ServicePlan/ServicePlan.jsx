import service_plan_image1 from '../../../assets/Images/Process/service_plan_image1.png';
import service_plan_image2 from '../../../assets/Images/Process/service_plan_image2.png';
import service_plan_image3 from '../../../assets/Images/Process/service_plan_image3.png';
import service_plan_image4 from '../../../assets/Images/Process/service_plan_image4.png';

const ServicePlan = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-5 my-5 md:mx-40 ">
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Why our services are <br />best?
                </h1>
            </div>
            <div className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                <p className=''>we offer top-notch renewable energy solutions with cutting-edge technology and customized plans. Our UK-certified <br /> sustainable options, including advanced solar and wind systems, ensure high performance and reliability. Enjoy exceptional <br /> UK-based customer support for a seamless, eco-friendly energy experience. Choose us for innovative and sustainable <br />  energy solutions.</p>
            </div>

            <div className='chose-card-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={service_plan_image1}
                            alt="chose-image"
                        />
                    </div>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Customized plans</h1>
                        <div className='mb-20'>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">While we offer some one-size-fits-all solutions, <br /> we also recognise that no two businesses are the <br /> same. As such, our electricity plans are fully <br /> adjustable to suit you. Our fixed-rate plan offers <br /> budget certainty, while our flexible arrangement <br /> enables you to modify your pricing according to your <br /> changing energy needs.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Competitive pricing</h1>
                        <div className='mb-20'>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">We understand the need to maintain expenses within <br />your grasp. That’s why we provide competitive pricing  <br /> to guarantee you save money without <br />compromising on quality and  <br />dependability. Switching with us is also easy, taking  <br /> the stress out of changing to a cheaper deal. </p>
                        </div>
                    </div>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={service_plan_image2}
                            alt="chose-image"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={service_plan_image3}
                            alt="chose-image"
                        />
                    </div>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Exceptional Customer Support</h1>
                        <div className='mb-20'>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">At Energy Solutions we believe in putting our <br /> customers first. Our team of knowledgeable <br />professionals is always available to address any <br /> questions or concerns you may have. Whether you <br /> need assistance with billing inquiries or technical <br /> support, we’re here to help every step of the way.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Sustainable Solutions</h1>
                        <div className='mb-20'>
                            <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">We are committed to sustainability and <br /> environmental responsibility. That’s why we offer <br /> renewable energy options to help reduce your carbon <br /> footprint and contribute to a cleaner, greener future. </p>
                        </div>
                    </div>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={service_plan_image4}
                            alt="chose-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePlan;