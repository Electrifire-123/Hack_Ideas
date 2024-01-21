import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthLayout = ({children,authentication}) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus!== authentication){
            navigate('/')
        }
        setLoader(false)
    },[navigate,authStatus,authentication,children])
  return loader ? <h2>Loading...</h2>:<div className=' h-screen w-screen flex justify-center'>{children}</div>
}

export default AuthLayout