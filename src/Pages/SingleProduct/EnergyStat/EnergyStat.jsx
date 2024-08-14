import statisticsLogo from '../../../assets/Images/Process/stat.png';
import technologyImage from '../../../assets/Images/icons/technology.png';
import co2Icon from '../../../assets/Images/Mission/co2.png';
import photo1 from '../../../assets/Images/banner/photo1.png';
import photo2 from '../../../assets/Images/banner/photo2.png';
import photo3 from '../../../assets/Images/banner/photo3.png';

const EnergyStat = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 my-20 md:m-20">
            <div>
                <div className="section-container">
                    <div>
                        <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                            Energy Stats
                        </h1>
                    </div>
                    <div>
                        <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Solar PV provides a sustainable, long-term solution to improving resilience on site, providing cheaper power <br /> and reducing carbon dioxide emissions. Direct capital investment or funded solutions are standard in the <br /> current market.</p>
                    </div>

                    <div className='text-left'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10'>
                            <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                                <img className='w-12 h-12 mb-3'
                                    src={statisticsLogo}
                                    alt="stat-image"
                                />
                                <h5 className='text-lg font-semibold text-green-800'>Finance</h5>
                                <p className='text-gray-600'>Lower energy costs and improved <br /> resilience.</p>
                                <div className='w-50'>
                                    <button className="bg-[#4CAF50] text-[#F3FAF3] w-1/2 py-2 px-4 rounded-lg mt-4">Learn more</button>
                                </div>
                            </div>
                            <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                                <img className='w-12 h-12 mb-3'
                                    src={co2Icon}
                                    alt="stat-image"
                                />
                                <h5 className='text-lg font-semibold text-green-800'>Carbon Footprint</h5>
                                <p className='text-gray-600'>Sustainable power with lower <br /> carbon footprint.</p>
                                <div className='w-50'>
                                    <button className="bg-[#4CAF50] text-[#F3FAF3] w-1/2 py-2 px-4 rounded-lg mt-4">Learn more</button>
                                </div>
                            </div>
                            <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                                <img className='w-12 h-12 mb-3'
                                    src={technologyImage}
                                    alt="stat-image"
                                />
                                <h5 className='text-lg font-semibold text-green-800'>Complexity</h5>
                                <p className='text-gray-600'>Simple, effective technology for diverse <br /> applications.</p>
                                <div className='w-50'>
                                    <button className="bg-[#4CAF50] text-[#F3FAF3] w-1/2 py-2 px-4 rounded-lg mt-4">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="text-center flex flex-col justify-between gap-5 mx-10 my-10 md:mx-20 md:my-20">
                    <div className='my-14'>
                        <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                            More photos
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2' >
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo1}
                                alt="stat-image"
                            />
                        </div>
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo2}
                                alt="stat-image"
                            />
                        </div>
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo3}
                                alt="stat-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnergyStat;