import { useEffect, useState } from 'react';
import axios from 'axios';

const Invoice = () => {
    const [users, setUsers] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/users');
                const fetchedUsers = response.data.reverse();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchSpecialists = async () => {
            try {
                const response = await axios.get('https://energy-project-server.vercel.app/specialists');
                const fetchedSpecialists = response.data.reverse();
                setSpecialists(fetchedSpecialists);
                // Set the last input specialist as the initially selected user
                if (fetchedSpecialists.length > 0) {
                    setSelectedUser(fetchedSpecialists[0]);
                }
            } catch (error) {
                console.error('Error fetching specialists:', error);
            }
        };

        fetchUsers();
        fetchSpecialists();
    }, []);

    const handleUserClick = (user) => {
        // Find the specialist corresponding to the selected user
        const foundSpecialist = specialists.find((specialist) => specialist.username === user.username);
        if (foundSpecialist) {
            setSelectedUser({
                ...user,
                description: foundSpecialist.comment // Set description from specialist comment
            });
        } else {
            setSelectedUser(user); // Fallback to user data if specialist not found
        }
    };

    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 md:grid-cols-3 grid-cols-1">
            {/* Main content */}
            <div className="bg-[#FEFEFE] p-5 mr-3 col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
                {selectedUser ? (
                    <>
                        <h1>User Details</h1>
                        <div className='text-center'>
                            <div className='w-full flex justify-center mb-2'>
                                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={selectedUser?.image} alt="" />
                            </div>
                            <h1 className='text-2xl font-bold'>{selectedUser.username}</h1>
                            <p>{selectedUser.email}</p>
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>Details</h1>
                            <p><span className='text-[#64748B] font-bold'>Contact number </span>: {selectedUser?.personalInfo?.phone || 'Not provided'}</p>
                            <p><span className='text-[#64748B] font-bold'>Address  </span>: {selectedUser?.personalInfo?.address || 'Not provided'}</p>
                            <p><span className='text-[#64748B] font-bold'>Business Name  </span>: {selectedUser?.businessInfo?.businessName || 'Not provided'}</p>
                            <p><span className='text-[#64748B] font-bold'>Business Address  </span>: {selectedUser?.businessInfo?.businessAddress || 'Not provided'}</p>
                            <p><span className='text-[#64748B] font-bold'>Business email  </span>: {selectedUser?.businessInfo?.businessEmail || 'Not provided'}</p>
                            <p><span className='text-[#64748B] font-bold'>Business phone  </span>: {selectedUser?.businessInfo?.businessPhone || 'Not provided'}</p>
                            {selectedUser?.description && (
                                <p><span className='text-[#64748B] font-bold'>Description  </span>: {selectedUser.description}</p>
                            )}
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center mt-4'>
                            <button className="btn btn-outline mb-2 md:mb-0 md:mr-3">Reply through call</button>
                            <button className="btn bg-black text-white md:ml-3">Reply through mail</button>
                        </div>

                    </>
                ) : (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Select a User</h1>
                    </div>
                )}
            </div>

            {/* Users in Specialist API */}
            <div className="bg-[#FEFEFE] p-5 col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
                <h1>Users in Specialist API</h1>
                <div>
                    {users.map((user) => {
                        const foundInSpecialists = specialists.find((specialist) => specialist.username === user.username);
                        if (foundInSpecialists) {
                            return (
                                <div key={user._id} className='grid grid-cols-3 gap-5 mt-5 items-center justify-center cursor-pointer' onClick={() => handleUserClick(user)}>
                                    <div>
                                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={user?.image} alt="" />
                                    </div>
                                    <div className='col-span-2'>
                                        <h1>{user.username}</h1>
                                    </div>
                                </div>
                            );
                        } else {
                            return null; // Don't render if user is not in specialists API
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Invoice;
