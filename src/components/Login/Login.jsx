import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {googleLogin} = useContext(AuthContext);
    const handleWithBtn  = (media) =>{
        media()
        .then(res => console.log(res))
        .error(error => console.log(error))
    }
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                    </div>
                </form>
                <p className="text-gray-600 text-sm text-center">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
                <div className="my-6">
                    <button onClick={() =>handleWithBtn(googleLogin)} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;