import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProfileUpdate = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        image: '',
        personalInfo: {
            name: '',
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user data if user is available
        if (user && user.email) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(`https://energy-project-server.vercel.app/users/${user.email}`); // Replace with your API endpoint
                    const data = response.data;

                    // Ensure personalInfo and businessInfo are properly initialized
                    setUserData({
                        username: data.username || '',
                        email: data.email || '',
                        image: data.image || '',

                        personalInfo: {
                            name: data.personalInfo?.name || '',
                            phone: data.personalInfo?.phone || '',
                            address: data.personalInfo?.address || '',
                        },
                        businessInfo: {
                            businessName: data.businessInfo?.businessName || '',
                            businessEmail: data.businessInfo?.businessEmail || '',
                            businessPhone: data.businessInfo?.businessPhone || '',
                            businessAddress: data.businessInfo?.businessAddress || '',
                        },
                    });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchUserData();
        } else {
            setLoading(false);
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys.length === 1) {
            setUserData(prevUserData => ({
                ...prevUserData,
                [name]: value,
            }));
        } else if (keys.length === 2) {
            setUserData(prevUserData => ({
                ...prevUserData,
                [keys[0]]: {
                    ...prevUserData[keys[0]],
                    [keys[1]]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        // Extract firstName and lastName from username
        const username = userData.username;
        const splitName = username.split(' ');
        const firstName = splitName[0];
        const lastName = splitName.slice(1).join(' ');

        // Update userData with firstName and lastName
        const updatedUserData = {
            ...userData,
            firstName: firstName,
            lastName: lastName,
        };

        try {
            const response = await axios.put(`https://energy-project-server.vercel.app/users/${user.email}`, updatedUserData);
            console.log('Updated user data:', response.data);

            Swal.fire({
                position: 'top-start',
                icon: 'success',
                title: 'User info updated successfully.',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/profile');
            form.reset();



        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading indicator
    }

    if (!user || !user.email) {
        return <p>User not logged in</p>; // Show an appropriate message or redirect to a login page
    }
    const handleNavigate = () => {
        navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="section-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <div className='text-center'>
                            {/*   <img style={{ width: '280px', height: '280px', borderRadius: '50%' }} src={userData?.image} alt='Profile Image' /> */}

                            <input
                                type="text"
                                className='text-xl font-semibold'
                                name="image"
                                placeholder="Enter Image Link"
                                value={userData.image}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                            <h1 className='text-4xl font-bold'>{userData?.username}</h1>
                        </div>
                        <div>
                            <p className='text-[#6D6D6D] mt-2'>{userData?.email}</p>
                        </div>
                    </div>

                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                            <div className='mt-5 mb-10' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                                <h1 className='text-3xl font-bold'>Personal information</h1>
                            </div>

                            <div className='text-left'>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Name</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="username"
                                        value={userData.username}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Email address</p>
                                    <input
                                        type="email"
                                        className='text-xl font-semibold'
                                        name="email"
                                        readOnly  
                                        value={userData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Phone</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="personalInfo.phone"
                                        value={userData.personalInfo.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Address</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="personalInfo.address"
                                        value={userData.personalInfo.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                            <div className='mt-5 mb-10' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                                <h1 className='text-3xl font-bold'>Business information</h1>
                            </div>

                            <div className='text-left'>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Business name</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="businessInfo.businessName"
                                        value={userData.businessInfo.businessName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Business email address</p>
                                    <input
                                        type="email"
                                        className='text-xl font-semibold'
                                        name="businessInfo.businessEmail"
                                        value={userData.businessInfo.businessEmail}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Business phone</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="businessInfo.businessPhone"
                                        value={userData.businessInfo.businessPhone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#6D6D6D] mt-2'>Business address</p>
                                    <input
                                        type="text"
                                        className='text-xl font-semibold'
                                        name="businessInfo.businessAddress"
                                        value={userData.businessInfo.businessAddress}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 mr-3 text-white font-bold py-2 px-4 rounded">
                            Update Profile
                        </button>

                        <button onClick={handleNavigate} className="bg-black  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back to Profile
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdate;
