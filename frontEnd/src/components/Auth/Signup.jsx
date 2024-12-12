import React, { useState } from "react";
import Validation from '../../validation.js'
import {Link} from 'react-router-dom'
function SignupForm() {

    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        file:'',
    })

    const [err,Seterr] =useState('')

    const handleChange = (e) => {
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const NameValid=Validation.validName(data.name)
        const Passwordvalid =Validation.validPW(data.password)
        const EmailValid =Validation.validemail(data.email)

        if(typeof NameValid=='string' && NameValid.length>1){
            return Seterr(NameValid)
        }
        if (typeof Passwordvalid == 'string' && Passwordvalid.length > 2) {
            return Seterr(Passwordvalid)
        }
        if(typeof EmailValid=='string' && EmailValid.length>2){
            return Seterr(EmailValid)
        }
        
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Signup</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* File Upload */}
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-600">
                            Upload a File
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="w-full mt-1 block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <p className="text-red">{err}</p>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Signup
                        </button>
                        <p>Already Have an account ? <Link to={'/Login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;