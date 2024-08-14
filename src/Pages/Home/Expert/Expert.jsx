import '../../../App.css';
import expertImage from '../../../assets/Images/Expert/expert1.png';

const Expert = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center h-auto lg:h-[507px] p-10 md:p-40 bg-gradient-to-r from-green-900 to-blue-300 text-white my-40">
            <div className="w-full md:w-full lg:w-1/2 text-left">
                <h2 className="font-sora text-2xl md:text-4xl font-bold leading-[46.8px]">
                    What our <span className="text-green-500">expert</span> says
                </h2>
                <p className="quote-mark">“</p>
                <p className="font-poppins text-lg font-medium leading-[31.5px] text-gray-300">
                    We are transforming energy with cutting-edge solar panels, wind turbines, and storage systems. Our mission is to create a sustainable, greener future. Join us in reducing carbon footprints and embracing renewable energy. Thank you for supporting a cleaner planet.
                </p>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img src={expertImage} alt="Expert" className="w-full h-[610.27px] mb-[103.27px] rounded-lg object-cover" />
            </div>
        </div>

    );
};

export default Expert;

