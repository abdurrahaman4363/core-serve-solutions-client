import '../../../App.css';
import FacebookIcon from '../../../assets/Images/icons/facebook.png';
import LinkedInIcon from '../../../assets/Images/icons/linkedIn.png';
import XIcon from '../../../assets/Images/icons/x.png';
import InstragramIcon from '../../../assets/Images/icons/instragram.png';
import logo from '../../../assets/Images/logo/logo_1.png';

const Footer = () => {
    return (
        <footer className="bg-[#0E2510] text-white text-left mt-20 mb-0 py-20 px-10 md:px-40 font-sora">

            <div className="flex flex-col lg:flex-row justify-between mb-14">
                <div>
                    <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">Subscribe for our <span className="text-[#4CAF50]">newsletter</span></h2>
                    <p className="text-gray-400 mb-5 lg:mb-10 text-lg lg:text-xl font-medium">Stay up-to-date by getting our new blogs</p>
                </div>

                <div className="flex justify-center items-center">
                    <input type="email" placeholder="Enter e-mail" className="px-3 py-3 lg:py-5 rounded-l-full border-4 border-[#4CAF50] w-64 lg:w-96" />
                    <button className="px-3 py-3 lg:py-5 bg-[#4CAF50] text-white border-4 border-[#4CAF50] rounded-r-full">Subscribe</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 w-full mb-10">
                <div className="flex flex-col gap-4">
                    {/* <h3 className="text-4xl font-bold mb-4">Logo</h3> */}
                    <div className='w-24 h-24 flex justify-center items-center cursor-pointer'>
                        <img  src={logo} alt="" />
                    </div>
                    <div className="ms-6 w-12 h-12 flex justify-center items-center cursor-pointer">
                        <img src={FacebookIcon} alt="facebook-icon" />
                    </div>
                    <div className="ms-6 w-12 h-12 flex justify-center items-center cursor-pointer">
                        <img src={LinkedInIcon} alt="linkedIn-icon" />
                    </div>
                    <div className="ms-6 w-12 h-12 flex justify-center items-center cursor-pointer">
                        <img src={XIcon} alt="x-icon" />
                    </div>
                    <div className="ms-6 w-12 h-12 flex justify-center items-center cursor-pointer">
                        <img src={InstragramIcon} alt="instragram-icon" />
                    </div>
                </div>

                <div className="lg:mr-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-5">Products</h3>
                    <ul className="list-none p-0">
                        <li className="text-lg font-medium mb-2">Heat pumps</li>
                        <li className="text-lg font-medium mb-2">Solar</li>
                        <li className="text-lg font-medium mb-2">Gas engine</li>
                        <li className="text-lg font-medium mb-2">Asset controls</li>
                        <li className="text-lg font-medium mb-2">Energy storage</li>
                        <li className="text-lg font-medium mb-2">Hydrogen</li>
                    </ul>
                </div>
                <div className="flex-1 lg:mr-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-5">Contacts</h3>
                    <p className="text-lg font-medium mb-2">8859 Birch Road, North <br /> Paytoncester 73622</p>
                    {/* <p className="text-lg font-medium mb-2">tim.jennings@example.com</p> */}
                    <p className="text-lg font-medium mb-2">(230) 833-7709</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-5">Links</h3>
                    <ul className="list-none p-0">
                        <li className="text-lg font-medium mb-2">About us</li>
                        <li className="text-lg font-medium mb-2">Contact us</li>
                        <li className="text-lg font-medium mb-2">Careers</li>
                        <li className="text-lg font-medium mb-2">FAQs</li>
                        <li className="text-lg font-medium mb-2">Manage cookies</li>
                        <li className="text-lg font-medium mb-2">Privacy policy</li>
                        <li className="text-lg font-medium mb-2">Terms & conditions</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-400 pt-5 text-left text-gray-300 text-sm lg:text-base font-normal">
                <p>&copy; 2024 X company. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;