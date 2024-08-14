import { useEffect, useState } from 'react';
import axios from 'axios';
import user1 from '../../../assets/Images/dashboard/user-image-1.png';

const User = () => {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    console.log('from user', selectedUser);

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/users'); // Update this URL with your backend endpoint
                const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Assuming `createdAt` field for sorting
                setUserData(sortedData.reverse());
                setSelectedUser(sortedData[0]); // Set the most recent user as the selected user initially
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (userData.length === 0 || !selectedUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 md:grid-cols-3 grid-cols-1">
            {/* side bar one */}
            <div className="bg-[#FEFEFE] p-5 mr-3 col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
                <h1>User Profile</h1>
                <div className='text-center'>
                    <div className='w-full flex justify-center mb-2'>
                        <img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={selectedUser?.image} alt="provide image" />
                    </div>
                    <h1 className='text-2xl font-bold'>{selectedUser.firstName} {selectedUser.lastName}</h1>
                    <p>{selectedUser.email}</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Pending order</h1>
                    <p>{selectedUser.pendingOrder || 'No pending order'}</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='bg-[#E8EFFF] p-3 rounded text-center md:text-left'>
                        <span>Last visit</span>
                        <h1 className='text-xl font-bold'>{selectedUser.lastVisit || 'Did not input yet'}</h1>
                    </div>
                    <div className='bg-[#E8EFFF] p-3 rounded text-center md:text-left mt-4 md:mt-0'>
                        <span>Last purchase</span>
                        <h1 className='text-xl font-bold'>{selectedUser.lastPurchase || 'Did not input yet'}</h1>
                    </div>
                    <div className='bg-[#E8EFFF] p-3 rounded text-center md:text-left mt-4 md:mt-0'>
                        <span>Total spend</span>
                        <h1 className='text-xl font-bold'>USD {selectedUser.totalSpend || '0.00'}</h1>
                    </div>
                </div>


                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>Details</h1>
                    <p><span className='text-[#64748B] font-bold'>Contact number</span>: {selectedUser?.personalInfo?.phone || 'Did not input yet'}</p>
                    <p><span className='text-[#64748B] font-bold'>Address</span>: {selectedUser?.personalInfo?.address || 'Did not input yet'}</p>

                    <p><span className='text-[#64748B] font-bold'>Business Name</span>: {selectedUser?.businessInfo?.
                        businessName
                        || 'Did not input yet'}</p>
                    <p><span className='text-[#64748B] font-bold'>Business Address</span>: {selectedUser?.businessInfo?.businessAddress
                        || 'Did not input yet'}</p>
                    <p><span className='text-[#64748B] font-bold'>Business email</span>: {selectedUser?.businessInfo?.businessEmail || 'Did not input yet'}</p>
                    <p><span className='text-[#64748B] font-bold'>Business phone</span>: {selectedUser?.businessInfo?.businessPhone || 'Did not input yet'}</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'> Purchase list </h1>
                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>Products</p>
                        </div>
                        <div>
                            <h1>USD 345.23</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* side bar two */}
            <div className="bg-[#FEFEFE] p-5 col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
                <h1>User</h1>
                {userData.map((user, index) => (
                    <div key={index} className='grid grid-cols-3 gap-5 mt-5 items-center justify-center cursor-pointer' onClick={() => setSelectedUser(user)}>

                        <div className='flex justify-center'>
                            <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user?.image} alt="provide image" />
                        </div>
                        <div className='col-span-2'>
                            <p className=' font-bold'>{user.firstName} {user.lastName}</p>
                            {/* <p className='text-sm '>{user.email}</p> */}
                            {/* <p>{user.lastVisit || "Last visit: Unknown"}</p>  Replace this line with the actual date field if you have one */}
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
