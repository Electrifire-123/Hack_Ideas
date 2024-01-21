import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import authService from "./appwrite/auth"
import { login, logout, saveUserInfo } from "./store/authSlice"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
   async function saveUser(userData){
      const user = await authService.getUser(userData.$id)
                    console.log("User DAtabase data ::",user)
                    dispatch(saveUserInfo(user.documents[0]))
    }
    authService.getCurrentUser()
      .then(userData=>{
        if(userData){
          dispatch(login(userData))
          saveUser(userData)
        }else{
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))
  },[dispatch])
  return (
    <>
      <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full  block">
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </div>
      {/* {loading&&<Loader/>} */}
      {loading&& <h2>Loading...</h2>}
     </div>
    </>
  )
}

export default App
