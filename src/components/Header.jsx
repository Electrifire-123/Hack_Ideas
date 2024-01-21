// import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
    const navigate = useNavigate()
    const authStatus = useSelector(state=>state.auth.status)

  return (
    <div className='fixed left-0 top-0 px-4 py-2 bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600 w-[100vw] z-10'>
        <nav
            className='m-auto mt-0 mb-0 flex justify-between max-w-screen-xl'>
            <button onClick={()=>navigate('/')} className="text-2xl font-bold text-violet-600 dark:text-white" href="#">
                Hack Ideas
            </button>
            {/* <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-violet-600 dark:text-gray-100 p-1" id="navbar_burger">
                        <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Hamberger menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                </button>
            </div> */}
            
            { authStatus ?
            <div className=" lg:flex">
                <div className=' md:flex'>
                    <button onClick={()=>navigate('/')} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700  lg:inline-block "
                        >
                        Home
                    </button>
                    <button onClick={()=>navigate('/create_challenge')} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700  lg:inline-block "
                        >
                        Create Challenge
                    </button>
                    <button onClick={()=>navigate('/my_profile')} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700  lg:inline-block "
                        >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
            : <div className=" lg:flex">
                <div>
                    <span className="" id="util_data" data="{{ json_encode($util_data) }}"></span>
                    <button onClick={()=>navigate('/login')} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hidden lg:inline-block "
                        >
                        Sign In
                    </button>
                    <button onClick={()=>navigate('/register')} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hidden lg:inline-block "
                        >
                        Register
                    </button>
                </div>

            </div>}
        </nav> 
    </div>
  )
}

export default Header