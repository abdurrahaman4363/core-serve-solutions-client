import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/login/signup_img.jpeg';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('user'); // default role

    // Fetch all users from the database
    const fetchUsers = () => {
        fetch(`https://energy-project-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
         /*    .catch(error => {
                console.error('Error fetching users:', error);
           Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error fetching users!',
                }); 
            }); */
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const username = `${firstName} ${lastName}`;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const role = selectedRole; // Get the selected role

        if (password !== confirmPassword) return setError('Password does not match');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);

                updateUserProfile(username)
                    .then(() => {
                        // Check if user already exists in the database
                        const existingUser = users.find(user => user.email === email);
                        if (!existingUser) {
                            // Create user entry in the database
                            const userInfo = {
                                firstName,
                                lastName,
                                username,
                                email,
                                role,
                            };

                            fetch(`https://energy-project-server.vercel.app/users`, {
                                method: "POST",
                                headers: { 'content-type': 'application/json' },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        console.log('user added to the database', data);
                                        form.reset();
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });

                                        if (role === 'admin') {
                                            navigate('/dashboard');
                                        } 
                                        if(role === 'user') {
                                            navigate('/');
                                        }
                                    }
                                });
                        } else {
                            setError('Email already exists. Please login!');
                        }
                    })
                    .catch(error => console.log(error));
            });
    };

    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-10 my-10 md:mx-20 md:my-14 lg:mx-40 lg:my-20">
            <p className='mt-5 text-[#4CAF50] font-bold'>Welcome</p>
            <h1 className='text-3xl font-bold my-5'>Stay connected with us</h1>
            <p>Access your account to manage energy usage, view bills, and explore our latest <br></br> services effortlessly.</p>

            <div className="">
                <div className="w-full mx-auto mt-10 mb-24 px-10">
                    <img src={img} alt="" />
                </div>

                <div className="">
                    <div className="mx-10">
                        <h1 className="text-3xl text-center font-bold my-10">Sign up a new account</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control mt-5">
                                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-5">
                                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-5">
                                <input type="text" name='email' placeholder="Email address" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-5 relative">
                                <input
                                    type={showPassword1 ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility1}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="form-control mt-5 relative">
                                <input
                                    type={showPassword2 ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input input-bordered"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility2}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="form-control mt-5">
                                <select
                                    name="role"
                                    className="input input-bordered"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </div>

                            {error && <p className="text-red-500 mt-2">{error}</p>}

                            <div className="form-control mt-14">
                                <input className="btn bg-[#4CAF50] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin />
                        <p className='my-4 text-center'>Already Have An Account? <Link className='text-[#4CAF50]' to="/login">Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
