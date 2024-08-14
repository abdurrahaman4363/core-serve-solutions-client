import '../../../App.css';
import choseImage1 from '../../../assets/Images/login/signup_img.jpeg';
import choseImage2 from '../../../assets/Images/Process/choseImage2.png';
import choseImage3 from '../../../assets/Images/Process/choseImage3.png';


const Chose = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 md:m-20 lg:m-36">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Why Chose Us?</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    Your Partner in Smart <br /> Energy Solutions
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Understand, Solve & Evolve <br />Powering Your World with Reliable & Sustainable Energy. <br />Affordable, cleaner and simple renewable energy solutions from a global energy partner.</p>
            </div>

            <div className='chose-card-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={choseImage1}
                            alt="chose-image"
                        />
                    </div>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Renewable Energy</h1>
                        <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Our renewable energy options are designed to be <br />100% sustainable, offering you a choice of advanced <br /> renewable energy technologies and strategic <br />locations. Each option is supported by UK-certified <br />renewable certificates, ensuring that your energy <br /> comes from verified green sources.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Affordability</h1>
                        <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">We offer tailored pricing plans to fit your specific <br /> energy needs and budget. Benefit from our extensive <br /> expertise in energy efficiency to maximize your <br /> savings. Additionally, leverage the purchasing <br />strength of Shell to receive unparalleled value in your <br /> energy solutions.</p>
                    </div>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={choseImage2}
                            alt="chose-image"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                    <div>
                        <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                            src={choseImage3}
                            alt="chose-image"
                        />
                    </div>
                    <div className='text-left mt-10'>
                        <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Simplicity</h1>
                        <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">Experience hassle-free service with our UK-based <br />customer care team, dedicated to providing prompt <br />and efficient support. Manage your energy usage <br /> effortlessly through our online customer portal, which <br /> offers flexible options for both fixed and variable <br /> pricing plans, giving you control and peace of mind.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chose;