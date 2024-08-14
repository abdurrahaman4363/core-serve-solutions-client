import '../../../App.css';
import technologyImage from '../../../assets/Images/icons/technology.png';
import solutionImage from '../../../assets/Images/icons/solution.png';
import sustainabilityImage from '../../../assets/Images/icons/sustainability.png';
import supportImage from '../../../assets/Images/icons/support.png';

const Value = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 md:m-20 lg:m-40">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Our Core Value</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    What make us best?
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Innovative technology, tailored solutions, and exceptional customer service. Trusted <br />for efficiency, reliability, and sustainability.</p>
            </div>

            <div className='text-left'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-10'>
                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3'
                            src={technologyImage}
                            alt="stat-image"
                        />
                        <h1 className='font-bold'>Innovative Technology</h1>
                        <p className='text-[#6D6D6D] mt-2'>ECutting-edge renewable energy solutions designed for <br /> maximum efficiency and reliability.</p>
                    </div>

                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3'
                            src={solutionImage}
                            alt="stat-image"
                        />
                        <h1 className='font-bold'>Tailored Solutions</h1>
                        <p className='text-[#6D6D6D] mt-2'>Customized energy plans to fit your unique needs and <br /> budget, ensuring optimal value.</p>
                    </div>

                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3'
                            src={sustainabilityImage}
                            alt="stat-image"
                        />
                        <h1 className='font-bold'>Certified Sustainability</h1>
                        <p className='text-[#6D6D6D] mt-2'> UK-certified renewable certificates guaranteeing genuine <br />green energy sources. </p>
                    </div>

                    <div className='bg-[#F3FAF3] p-6 rounded-lg shadow-md'>
                        <img className='w-12 h-12 mb-3'
                            src={supportImage}
                            alt="stat-image"
                        />
                        <h1 className='font-bold'>Exceptional Support</h1>
                        <p className='text-[#6D6D6D] mt-2'>Dedicated UK-based customer care providing seamless <br /> service and expert assistance.</p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Value;