import guideBanner from '../../../assets/Images/banner/guide_banner.gif';

const GuideBanner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly bg-[#4CAF50] min-h-screen'>
            <div className="flex flex-col items-start justify-evenly p-5">
                <h3 className="font-poppins text-lg md:text-xl lg:text-2xl font-medium leading-tight text-left text-[#0E2510] mb-4">Blog & Guide</h3>
                <h1 className="font-sora leading-[57.6px] text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFEFE]">Expert
                    <b className="text-black"> Insights</b> & <br />
                    <b className="text-black"> Practical </b>Tips</h1>
                <p className="font-poppins text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#F5F5F5] mt-5 mb-5">
                    Stay Informed with the Latest Trends, Tips, and Expert Advice <br />  on Renewable Energy Solutions.
                </p>
            </div>
            <div>
                <img
                    src={guideBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};

export default GuideBanner;