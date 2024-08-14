import contactBanner from '../../../assets/Images/banner/contact_banner.png';

const Banner = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-5 my-10 md:mx-10 md:my-12">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Contact us</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    <p className='text-black'>Let us know what you need</p>
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                    Reach out to our team for expert assistance and personalized energy solutions. We are here to help with any questions or <br />support you need.
                </p>
            </div>

            <div className="mx-10 lg:mx-auto lg:w-3/4 xl:w-4/5">
                <div className="w-full mt-10 mb-12">
                    <img className="w-full h-auto object-cover" src={contactBanner} alt="Contact-Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;