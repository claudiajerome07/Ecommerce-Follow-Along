import { useState } from 'react';

function LoginPage() {
    const [details, setdetails] = useState({
        email: '',
        password: '',
    })

    const handlechange=(e)=>{
        const {name,value}=e.target;
        console.log(value)
        setdetails({
            ...details,
            [name]:value
        })
    }
    const handlelogin=()=>{
        // need to do axios request to backend
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div >
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">
                    Login Page
                </h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-m font-medium text-gray-700 mb-2 font-sans">
                            Enter email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="abc@gmail.com"
                            name='email'
                            value={details.email}
                            onChange={handlechange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                            Enter password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="****"
                            name='password'
                            value={details.password}
                            onChange={handlechange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
