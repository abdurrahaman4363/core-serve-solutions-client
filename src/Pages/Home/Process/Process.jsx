import '../../../App.css';
import informationLogo from '../../../assets/Images/Process/inpormation.png';
import searchLogo from '../../../assets/Images/Process/search.png';
import statisticsLogo from '../../../assets/Images/Process/stat.png';

const Process = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 md:m-20 lg:m-40">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Our Process</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">How it works?
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Find commercial and consumer energy solutions in three simple steps.</p>
            </div>

            <div className='text-left'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10'>
                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3' src={informationLogo} alt="stat-image" />
                        <h5 className='text-lg font-semibold text-green-800'>Compare energy providers</h5>
                        <p className='text-gray-600'>Explore a wide array of options from our trusted partners, ensuring you are well-informed on each energy provider and ready to choose the deal that benefits you most</p>
                    </div>
                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3' src={searchLogo} alt="stat-image" />
                        <h5 className='text-lg font-semibold text-green-800'>Find the right deal</h5>
                        <p className='text-gray-600'>Decide with confidence. Rely on our insights and expertise to guide you toward the optimal pick tailored to your specific needs.</p>
                    </div>
                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3' src={statisticsLogo} alt="stat-image" />
                        <h5 className='text-lg font-semibold text-green-800'>Switch and save</h5>
                        <p className='text-gray-600'>Switch to your new energy provider and enjoy energy-efficient gas and electricity. Save money and enjoy the benefits of greener, higher quality energy.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Process;