import userImage from '../../assets/Images/Expert/teamMember3.png';
import { FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    // console.log('current user email',user.email);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        image:'',
        personalInfo: {
            username: '',
            phone: '',
            address: '',
        },
        businessInfo: {
            businessName: '',
            businessEmail: '',
            businessPhone: '',
            businessAddress: '',
        },
    });
    useEffect(() => {
        // Simulated fetch of user data (replace with actual API call)
        const fetchUserData = async () => {
            try {
                // Example API call
                const response = await axios.get(`https://energy-project-server.vercel.app/users/${user.email}`); // Replace with your API endpoint
                setUserData(response.data); // Assuming API returns data in the structure similar to userData state
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures useEffect runs only once
   
    const handleUpdate =()=>{
        navigate('profileUpdate')
    }



    return (

        <div className="section-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

            <div>
                <div className='text-center'>
                    <img style={{ width: '280px', height: '280px', borderRadius: '50%' }} src={userData?.image ||userImage} alt='Esther Howard' />
                </div>

                <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                    <h1 className='text-4xl font-bold'>{userData.username}</h1>
                    <button onClick={handleUpdate}  className="text-4xl text-black">
                        <FaEdit />
                    </button>
                </div>
                <div>
                    <p className='text-[#6D6D6D] mt-2'>{userData.email}</p>
                </div>
            </div>



            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                        <h1 className='text-3xl font-bold'>Personal information</h1>
                        <button onClick={handleUpdate} className="text-2xl text-black">
                            <FaEdit />
                        </button>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Name</p>
                            <h1 className='text-xl font-semibold'>{userData?.username}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Email address</p>
                            <h1 className='text-xl font-semibold'>{userData?.email}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Phone</p>
                            <h1 className='text-xl font-semibold'>{userData?.personalInfo?.phone}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Address</p>
                            <h1 className='text-xl font-semibold'>{userData?.personalInfo?.address}</h1>
                        </div>
                    </div>
                </div>

                <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                        <h1 className='text-3xl font-bold'>Business information</h1>
                        <button onClick={handleUpdate}  className="text-2xl text-black">
                            <FaEdit />
                        </button>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business name</p>
                            <h1 className='text-xl font-semibold'>{userData?.businessInfo?.businessName}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business email address</p>
                            <h1 className='text-xl font-semibold'>{userData?.businessInfo?.businessEmail}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business phone</p>
                            <h1 className='text-xl font-semibold'>{userData?.businessInfo?.businessPhone}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business address</p>
                            <h1 className='text-xl font-semibold'>{userData?.businessInfo?.businessAddress}</h1>
                        </div>
                    </div>
                </div>



                <div style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10 text-left'>
                        <h1 className='text-3xl font-bold'>Purchased services</h1>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>

                        <button className='see-button mt-5'> See More
                            <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                        </button>

                    </div>
                </div>



                <div style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10 text-left'>
                        <h1 className='text-3xl font-bold'>Purchased products</h1>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>

                        <button className='see-button mt-5'> See More
                            <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                        </button>

                    </div>
                </div>
            </div>


            <div className='mt-40 mb-40'>
                <h1 className='text-4xl font-bold mb-8'>Billing history</h1>

                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
                    <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px', }}>
                        <div className='mt-5 mb-10 text-left'>
                            <h1 className='text-3xl font-bold'>Billing overview</h1>
                        </div>

                        <div className='text-left'>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Last purchase</p>
                                <h1 className='text-xl font-semibold'>Usd 567.89</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Total spent</p>
                                <h1 className='text-xl font-semibold'>Usd 3457.90</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Last time purchased</p>
                                <h1 className='text-xl font-semibold'>5 days ago</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Total purchase</p>
                                <h1 className='text-xl font-semibold'>9</h1>
                            </div>
                        </div>
                    </div>

                    <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                        <div className='mt-5 mb-10 text-left'>
                            <h1 className='text-3xl font-bold'>Payment history</h1>
                        </div>

                        <div className='text-left'>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>

                            <button className='see-button mt-5'> See More
                                <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Profile; 