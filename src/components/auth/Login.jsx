import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { login as authLogin, saveUserInfo } from '../../store/authSlice';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [data, setData] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState('')

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        console.log(name)
        setData(prev=>({...prev,[name]:value}))
    }
    const login = async (e) => {
        e.preventDefault()
        setError('');
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    console.log("UserData after login ::",userData)
                    const user = await authService.getUser(userData.$id)
                    console.log("User DAtabase data ::",user)
                    dispatch(saveUserInfo(user.documents[0]))
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch(error){
            setError(error.message)
            console.log('Appwrite Service Login failed :: ',error)
        }
    }
  return (
    <div
    className='flex items-center justify-center'
    >
        <div className={`mx-auto w-full max-w-lg bg-slate-100 rounded-xl p-10 border border-black/10`}>
        <div className="mt-2 mb-2 m-auto text-xl font-bold flex justify-center">
                    <span className="inline-block w-full text-center">
                        {/* <Logo width="100%" /> */}
                        Hack Ideas
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/register"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center break-words text-pretty">{error}</p>}
        <form onSubmit={login} className='mt-8'>
            <div className='space-y-5 flex flex-col'>
                <div className=' w-72'>
                    <input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        name='email'
                        value={data.email}
                        required
                        onChange={handleChange}
                        className='w-[100%] text-center p-2 rounded'
                    />
                </div>
                <div className='w-72 '>
                    <input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        value={data.password}
                        name='password'
                        minLength='8'
                        required
                        onChange={handleChange}
                        className='w-[100%] text-center p-2 rounded'
                    />
                </div>
                <button
                type="submit"
                className=" bg-gray-400 p-2 ps-8 pe-8 rounded"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login