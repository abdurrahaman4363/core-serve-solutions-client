import traiff1 from '../../../assets/Images/Process/traiff1.png';
import traiff2 from '../../../assets/Images/Process/traiff2.png';
import traiff3 from '../../../assets/Images/Process/traiff3.png';


const Tariff = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 m-5 my-20 md:m-20 lg:m-40">
            <div className='section-container mt-20'>
                <div>
                    <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                        Types of business <br /> electricity tariffs
                    </h1>
                </div>
                <div className="text-[#6D6D6D]">
                    <p className=''>Electricity needs vary from business to business, meaning that no two business electricity contracts are the same. That’s why  <br /> we offer both fixed-rate and more customised deals to suit you. There are many types of business electricity tariffs, including:</p>
                </div>

                <div className='chose-card-container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                        <div>
                            <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                                src={traiff1}
                                alt="chose-image"
                            />
                        </div>
                        <div className='text-left mt-10'>
                            <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Fixed rate tariff</h1>
                            <div className='mb-20'>
                                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">This is one of the most popular business tariffs and <br /> the easiest to budget. With this tariff, you pay a <br />standing charge and fixed unit price every month. <br /> This price is usually locked in for up to five years <br /> meaning you’re protected even if wholesale prices <br /> rise.</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                        <div className='text-left mt-10'>
                            <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Green tariff</h1>
                            <div className='mb-20'>
                                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">As more businesses move towards more sustainable <br /> practices, green tariffs which provide 100% renewable <br /> energy are becoming more popular. Some suppliers <br />are starting to offer it as the standard and pricing <br /> it more competitively. If you have any questions about <br />tariffs and would like more guidance on which might <br /> be right for you, don’t hesitate to get in touch.</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                                src={traiff2}
                                alt="chose-image"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                        <div>
                            <img className='w-2/3 h-full lg:w-full lg:h-auto rounded-2xl'
                                src={traiff3}
                                alt="chose-image"
                            />
                        </div>
                        <div className='text-left mt-10'>
                            <h1 className='font-sora text-4xl font-bold text-[#0E2510] leading-tight'>Variable rate tariff</h1>
                            <div className='mb-20'>
                                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">The unit price on a variable tariff on the other hand <br />will change according to wholesale prices. This option  <br /> is more of a risk but does offer more flexibility and  <br />allows you to take advantage of any dips in business  <br />electricity prices.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='text-left mx-10 my-20 md:mx-40 md:my-28'>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    <p className='mb-5'>Start saving today</p>
                </h1>
                <div className='mb-5'>
                    <p className="text-[#6D6D6D]">When you compare prices with Energy Solutions, you could reduce your annual electricity bills by up <br /> to 40%, leading to significant savings and more efficient energy practices. Simply focus on your <br /> business and allow our expert customer service team to manage the switching process. It’s that easy.</p>
                </div>

                <button className='service-button mt-5'>See more now</button>
            </div>
        </div>
    );
};

export default Tariff;