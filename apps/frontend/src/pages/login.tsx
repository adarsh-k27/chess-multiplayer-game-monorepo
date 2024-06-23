import React from 'react'



export default function LoginScreen() {
    
    const google= (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const backendUrl="http://localhost:5000"
        const url=`${backendUrl}/auth/google`
        window.open(url, '_self');
    }
    return (
        <section className="w-screen h-screen sm:min-w-[300] bg-gray-900 flex items-center justify-center ">

            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-3 xs:p-6 sm:p-8">
                <div className="flex justify-center mb-4">
                    <img src="/logo.jpg" alt="Chess.com" className="w-20 h-28" />
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm text-gray-300">Username or Email</label>
                        <input type="text" id="username" className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring focus:ring-green-500 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
                        <input type="password" id="password" className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring focus:ring-green-500 focus:outline-none" />
                        <div className="flex justify-between items-center mt-2">
                            <label className="inline-flex items-center text-sm text-gray-300">
                                <input type="checkbox" className="form-checkbox text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500" />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500">Log In</button>
                    <div className="flex items-center justify-between my-4">
                        <span className="border-b border-gray-600 w-full"></span>
                        <span className="text-sm text-gray-400 mx-4">OR</span>
                        <span className="border-b border-gray-600 w-full"></span>
                    </div>
                    <div>
                        <button type='button' className="w-full flex items-center justify-center py-2 mb-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700">
                            <i className="fab fa-apple mr-2"></i> Log in with Apple
                        </button>
                        <button type='button' onClick={google} className="w-full flex items-center justify-center py-2 mb-2 bg-white text-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300">
                            <i className="fab fa-google mr-2"></i> Log in with Google
                        </button>
                        <button type='button' className="w-full flex items-center justify-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                            <i className="fab fa-facebook-f mr-2"></i> Log in with Facebook
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4 text-gray-400">
                    <p>New? <a href="#" className="text-gray-200 hover:underline">Sign up</a> and start playing chess!</p>
                </div>
            </div>
        </section>
    )
}