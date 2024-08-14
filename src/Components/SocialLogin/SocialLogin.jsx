import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    // Fetch all users from the database
    const fetchUsers = () => {
        fetch(`https://energy-project-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
        /*     .catch(error => {
                console.error('Error fetching users:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error fetching users!',
                });
            }); */
    };

    // Function to handle Google sign-in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    firstName: result.user.displayName.split(' ')[0],
                    lastName: result.user.displayName.split(' ')[1],
                    username: result.user.displayName,
                    email: result.user.email,
                    role: 'user', // Default role for new accounts
                };
                

                // Check if user already exists in the database
                const existingUser = users.find(user => user.email === userInfo.email);
                if (existingUser) {
                    // User exists, navigate based on the role
                    if (existingUser.role === 'admin') {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Admin logged in successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard');
                    } else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'User logged in successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                } else {
                    // User does not exist, create new user in the database
                    fetch(`https://energy-project-server.vercel.app/users`, {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'User created and logged in successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                     /*    .catch(error => {
                            console.error('Error creating user:', error);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error creating user!',
                            });
                        }); */
                }
            })
         /*    .catch(error => {
                console.error('Error signing in with Google:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error signing in with Google!',
                });
            }); */
    };

    const handleFacebookSignIn = () => {
        // Implement Facebook sign-in logic similarly if needed
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="">
            <div className="font-bold mt-3">or</div>
            <div className="">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-[#4CAF50] text-center mt-3">
                    <FaGoogle className=""></FaGoogle>
                </button>
                <button onClick={handleFacebookSignIn} className="btn btn-circle btn-outline btn-[#4CAF50] text-center ml-3 mt-3">
                    <FaFacebook className=""></FaFacebook>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
