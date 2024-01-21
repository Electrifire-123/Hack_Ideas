import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
const UserInfo = () => {
    const userInfo = useSelector(state=>state.auth.userInfo)
    const dispatch = useDispatch()
    const appLogout = () => {
        authService.logout();
        dispatch(logout())
    }
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border align-middle h-5/6 mt-20">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                My Profile
            </h3>
            <button onClick={()=>{appLogout()}} className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700  lg:inline-block "
                        >
                        Logout
                    </button>
            {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
            </p> */}
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {userInfo.name}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {userInfo.email}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        (123) 456-7890
                    </dd>
                </div>
                
            </dl>
        </div>
    </div>
  )
}

export default UserInfo