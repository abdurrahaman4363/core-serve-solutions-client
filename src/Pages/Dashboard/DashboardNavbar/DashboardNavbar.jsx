import { useContext, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import chatIcon from '../../../assets/Images/dashboard/chat_8214728.png';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/signup');
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="navbar bg-[#FEFEFE] px-8 flex flex-col lg:flex-row lg:justify-between">
            <div className="navbar-start flex items-center justify-between w-full lg:w-auto">
                <button className="btn btn-ghost btn-circle lg:hidden" onClick={toggleMenu}>
                    <FaBars />
                </button>
                <div className="form-control flex-grow lg:flex-grow-0 relative">
                    <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="input outline-none focus:outline-none border-none w-full lg:w-auto pl-10"
                    />
                </div>
            </div>

            <div className={`navbar-end flex-col lg:flex-row items-center lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                <div className="mx-3 text-center lg:text-right">
                    <p className="font-bold">{user.displayName}</p>
                  { /*  <span className="text-sm ">Ux Designer</span> */}
                </div>

                <div className="mx-3">
                    <img style={{ height: '20px', width: '20px', color: 'white' }} src={chatIcon} alt="Chat Icon" />
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow">
                        {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>*/}
                        <li onClick={handleLogOut}><a>Logout</a></li> 
                      
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
