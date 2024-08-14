import ourProductBanner from '../../../assets/Images/banner/our_product_banner.gif';

const OurProductBanner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly bg-[#4CAF50] min-h-screen'>
            <div className="flex flex-col items-start justify-evenly p-5">
                <h3 className="font-poppins text-lg md:text-xl lg:text-2xl font-medium leading-tight text-left text-[#0E2510] mb-4">Energy solution</h3>
                <h1 className="font-sora leading-[57.6px] text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFEFE]">Our
                    <b className="text-black"> Innovative</b> <br /> Energy
                    <b className="text-black"> Solutions</b></h1>
                <p className="font-poppins text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#F5F5F5] mt-5 mb-5">
                    Empowering Your Journey to Sustainability with Advanced, <br /> Reliable, and Efficient Energy Solutions Tailored to Meet Your <br /> Unique Needs.
                </p>
            </div>
            <div>
                <img
                    src={ourProductBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};

export default OurProductBanner;