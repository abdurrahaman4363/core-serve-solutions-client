import aboutImage from '../../../assets/Images/banner/about.png';

const Banner = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-5 my-10 md:mx-10 md:my-12">
            <div>
                <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Who we are?</small>
            </div>
            <div>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">
                    About us
                </h1>
            </div>
            <div>
                <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                    Creating a sense of community and purpose around sustainability.
                </p>
            </div>

            <div className="mx-10 lg:mx-auto lg:w-3/4 xl:w-4/5">
                <div className="w-full mt-10 mb-12">
                    <img className="w-full h-auto object-cover" src={aboutImage} alt="aboutImage" />
                </div>
                <div>
                    <p className="text-left text-[#6D6D6D]">
                        Energy Solutions (ES) LTD started in 2016 with one goal in mind: providing our customers with an exemplary energy comparison service that is far more than just the basics. Year after year, we continue to offer our business customers the easiest, most cost-effective ways to manage their energy; as well as the easiest possible way to switch. Whether you’re considering one of Big Five or you’re looking for something a little different, we’re equipped to help you make that positive change. Since our opening, we’ve helped hundreds of customers get more value when it comes to their energy. There aren’t many businesses out there that can say that. Our happy customers and excellent switching deals are proof that we’re everything we say we are. Try us out today to discover a new standard of service from small businesses to large-scale multinational firms.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Banner;