import ourServiceBanner from '../../../assets/Images/banner/our_service_banner.gif';

const OurServiceBanner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly bg-[#4CAF50] min-h-screen'>
            <div className="flex flex-col items-start justify-evenly p-5">
                <h3 className="font-poppins text-lg md:text-xl lg:text-2xl font-medium leading-tight text-left text-[#0E2510] mb-4">We provide best service</h3>
                <h1 className="font-sora leading-[57.6px] text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFEFE]">Empowering Your <br />
                    <b className="text-black">Energy</b> Choices for a <br />
                    <b className="text-black">Sustainable</b> Future</h1>
                <p className="font-poppins text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#F5F5F5] mt-5 mb-5">
                    Creating a sense of community and purpose around <br />sustainability.
                </p>
            </div>
            <div>
                <img
                    src={ourServiceBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};
export default OurServiceBanner;