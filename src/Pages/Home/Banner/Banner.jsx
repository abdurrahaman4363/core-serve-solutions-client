import '../../../App.css';
import bannerImage from '../../../assets/Images/banner/home_banner.gif';
import brandLogo from '../../../assets/Images/banner/brand-logo.png';


const Banner = () => {
    const brandLogoContainerStyles = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': '#F3FAF3',
        'padding': '20px',
    };

    const brandLogoStyle = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': '#F3FAF3',
        'width': '1120px',
        'height': '80px',
        'gap': '10px',
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-evenly bg-[#4CAF50] min-h-screen'>
                <div className="flex flex-col items-start justify-evenly p-5">
                    <h3 className="font-poppins text-lg md:text-xl lg:text-2xl font-medium leading-tight text-left text-[#0E2510] mb-4">
                        Understand, Solve & Evolve
                    </h3>
                    <h1 className="font-sora leading-[57.6px] text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFEFE]">
                        Powering Your World <br />
                        with <b className="text-black">Reliable</b> & <br />
                        <b className="text-black">Sustainable</b> Energy.
                    </h1>
                    <p className="font-poppins text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#F5F5F5] mt-5 mb-5">
                        Affordable, cleaner and simple renewable energy solutions from a global energy partner.
                    </p>
                    <button className="bg-white text-[#0E2510] border-none px-5 py-2 text-sm md:text-base lg:text-lg rounded-lg cursor-pointer mt-5">
                        Request a quote
                    </button>
                </div>
                <div
                >
                    <img
                        src={bannerImage}
                        alt="Banner-Illustration"
                    />
                </div>
            </div>
            <div style={brandLogoContainerStyles}>
                <img style={brandLogoStyle} src={brandLogo} alt="Brand-logo" />
            </div>
        </div >
    );
};

export default Banner;