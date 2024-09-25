import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container_signin">
            <div className="left-side">
                {isLogin ? (
                    <Login handleSwap={toggleView} />
                ) : (+
                    <Signup handleSwap={toggleView} />
                )}
            </div>
        </div>
    );
}


function Signup ({handleSwap}) {
    const [signupData, setSignupData] = useState({
        userName: '',
        email: '',
        password1: '',
        password2: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signupData.password1 !== signupData.password2) {
            setErrorMessage("Passwords didn't match");
            return;
        }

        const userData = {
            username: signupData.userName,
            email: signupData.email,
            password: signupData.password1,
        };

        try {
            const response = await axios.post('http://localhost:8000/signup/', userData);
            console.log('User registered:', response.data);
            alert('Registration successful!');
            navigate('/dashboard'); // Switch to login after successful registration
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('Error registering user. Please try again.');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-full">
            <div className="grid w-full grid-cols-1 overflow-hidden shadow-xl max-w-7xl lg:grid-cols-2">
                <div className="flex flex-col justify-center py-5 text-white pl-14 bg-gradient-to-b from-purple-900 to-indigo-900">
                    <h2 className="pb-6 mb-4 text-4xl font-bold text-center uppercase border-b-2 border-purple-400">
                        Trusted By Over 20,000 Companies
                    </h2>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">    
                        "StaffSphere has revolutionized our workflow and improved our team dynamics immensely."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Alex Johnson, CEO of Tech Innovations
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">
                        "The best decision we made was integrating StaffSphere into our operations."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Maria Garcia, HR Director at Global Solutions
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">
                        "StaffSphere's intuitive design and powerful features make it an invaluable tool for any organization."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Brian Lee, Project Manager at Creative Minds
                        </footer>
                    </blockquote>
                </div>
                <div className="flex items-center justify-center py-10 text-white bg-gradient-to-b from-purple-900 to-indigo-900">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md p-6 bg-purple-500 rounded-lg shadow-2xl"
                    >
                        <h2 className="mb-4 text-xl font-semibold text-center">Register</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="User Name"
                                value={signupData.userName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        {/* <div className="mb-3">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div> */}
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={signupData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                id="password1"
                                name="password1"
                                placeholder="Password"
                                value={signupData.password1}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                placeholder="Confirm Password"
                                value={signupData.password2}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        {/* <div className="mb-3">
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            >
                                <option value="" disabled>
                                    Select your country
                                </option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="Japan">Japan</option>
                            </select>
                        </div> */}
                        <button
                            type="submit"
                            className="w-full p-2 text-white transition-transform transform rounded-md shadow-md bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Register
                        </button>
                        <div className="mt-4 text-lg font-semibold text-center text-white">
                        Already have an account?
                        <a onClick={handleSwap} className="text-lg font-semibold text-white cursor-pointer hover:underline"> Log In</a>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};


function Login({ handleSwap }) {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                username: loginData.username,
                password: loginData.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('User logged in:', response.data);
            localStorage.setItem('token', response.data.access);
            alert('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-full">
            <div className="grid w-full grid-cols-1 overflow-hidden shadow-xl max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center py-5 text-white pl-14 bg-gradient-to-b from-purple-900 to-indigo-900">
                    <h2 className="pb-6 mb-4 text-4xl font-bold text-center uppercase border-b-2 border-purple-400">
                        Trusted By Over 20,000 Companies
                    </h2>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">    
                        "StaffSphere has revolutionized our workflow and improved our team dynamics immensely."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Alex Johnson, CEO of Tech Innovations
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">
                        "The best decision we made was integrating StaffSphere into our operations."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Maria Garcia, HR Director at Global Solutions
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 border-purple-400">
                        "StaffSphere's intuitive design and powerful features make it an invaluable tool for any organization."
                        <footer className="mt-1 text-xs text-gray-300">
                            — Brian Lee, Project Manager at Creative Minds
                        </footer>
                    </blockquote>
                </div>
        <div className="flex items-center justify-center py-10 text-white bg-gradient-to-b from-purple-900 to-indigo-900">
            
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-6 bg-purple-500 rounded-lg shadow-2xl"
            >
                <h2 className="mb-4 text-xl font-semibold text-center">Login</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 text-white transition-transform transform rounded-md shadow-md bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                    Login
                </button>
                <div className="mt-4 text-lg font-semibold text-center text-white">
                        New User?
                        <a onClick={handleSwap} className="text-lg font-semibold text-white cursor-pointer hover:underline"> Register</a>
                        </div>
            </form>
        </div>
        </div>
        </div>
    );
}

// export default function LoginSignup() {
//     const [isLogin, setIsLogin] = useState(true);

//     const toggleView = () => {
//         setIsLogin(!isLogin);
//     };

//     return (
//         <div className="container_signin">
//             <div className="left-side">
//                 {isLogin ? (
//                     <Login handleSwap={toggleView} />
//                 ) : (
//                     <Signup handleSwap={toggleView} />
//                 )}
//             </div>
//         </div>
//     );
// }


// export default LoginForm;
