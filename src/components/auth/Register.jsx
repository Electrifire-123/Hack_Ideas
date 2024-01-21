import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { login, saveUserInfo } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
const Register = () => {
    const navigate = useNavigate('')
    const [ error, setError] = useState('')
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData(prev=>({...prev,[name]:value}))
    }

    const register = async (e) => {
        e.preventDefault()
        setError('');
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                console.log("UserData after regerstering::",userData)
                const user = await authService.getUser(userData.$id)
                    console.log("User DAtabase data ::",user)
                    dispatch(saveUserInfo(user.documents[0]))
                if(userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
            console.log("Appwrite Service Signup Failed :: ",error)
        }
    }
  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mt-2 mb-2 m-auto text-xl font-bold flex justify-center">
                    <span className="inline-block w-full text-center">
                        {/* <Logo width="100%" /> */}
                        Hack Ideas

                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={register}>
                    <div className='space-y-5 flex flex-col' >
                        <div className='w-72'>
                            <input
                                label="Full Name: "
                                type='text'
                                placeholder="Enter your full name"
                                name='name'
                                value={data.name}
                                onChange={handleChange}
                                required
                                className='w-[100%] text-center p-2 rounded'
                            />
                        </div>
                        <div className='w-72'>
                            <input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                                required
                                className='w-[100%] text-center p-2 rounded'
                            />
                        </div>
                        <div className='w-72'>
                            <input
                                label="Password: "
                                type="password"
                                placeholder="Enter your password"
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                required
                                className='w-[100%] text-center p-2 rounded'
                            />
                        </div>
                        <button type="submit" className="w-full bg-gray-400 p-2 ps-8 pe-8 rounded">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Register