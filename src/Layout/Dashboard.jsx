import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaBlog, FaDashcube, FaFileInvoiceDollar, FaProcedures, FaServicestack, FaUpload, FaUser } from 'react-icons/fa';
import DashboardNavbar from '../Pages/Dashboard/DashboardNavbar/DashboardNavbar';
import axios from 'axios';
import logo from '../assets/Images/logo/logo_1.png'

const Dashboard = () => {
  const [uniqueEmailCount, setUniqueEmailCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUniqueEmailCount = async () => {
      try {
        const response = await axios.get('https://energy-project-server.vercel.app/specialists');
        const specialists = response.data;
        
        // Extract unique email addresses
        const uniqueEmails = [...new Set(specialists.map(specialist => specialist.email))];
        const count = uniqueEmails.length;
        
        setUniqueEmailCount(count);
      } catch (error) {
        console.error('Error fetching specialists:', error);
      }
    };

    fetchUniqueEmailCount();
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.sidebar') && !event.target.closest('.hamburger-menu')) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`sidebar fixed lg:relative z-10 bg-[#1C2434] text-[#DEE4EE] transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-60`}>
        <ul className="menu p-4 min-h-full">
          {/* Sidebar content here */}
          <li className='mt-6 mb-14'>
            <NavLink to="/dashboard" className="flex items-center space-x-2" onClick={handleLinkClick}>
              {/* <h1 className='text-3xl font-bold text-white'>Logo</h1> */}
              <img style={{height:'50px',width:'50px'}} src={logo} alt="" />
              <h1 className=' font-bold text-white'>Prime Services</h1>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaDashcube />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard/user" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaUser />
              <span>User</span>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard/products" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaProcedures />
              <span>Products</span>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard/services" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaServicestack />
              <span>Services</span>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard/blog" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaBlog />
              <span>Blog</span>
            </NavLink>
          </li>
          <li className='text-white mb-1'>
            <NavLink to="/dashboard/upload" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <FaUpload />
              <span>Upload</span>
            </NavLink>
          </li>
          <ul className='mt-4'>
            <li>Support</li>
            <li className='text-white mb-1'>
              <NavLink to="/dashboard/invoice" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <FaFileInvoiceDollar />
                <span>Invoice</span>
                <p className='h-5 w-5 bg-blue-600 text-white text-center rounded'>{uniqueEmailCount}</p>
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between bg-[#1C2434] p-4 lg:hidden">
          <FaBars className="text-white hamburger-menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        <DashboardNavbar />

        <div className="bg-[#FEFEFE] flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
