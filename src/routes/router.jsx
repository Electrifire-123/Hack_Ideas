import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import AuthLayout from "../components/auth/AuthLayout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import CreateChallenge from "../pages/CreateChallenge";
import SingleChallenge from "../pages/SingleChallenge";
import UserInfo from "../pages/UserInfo";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                errorElement:<ErrorPage/>
            },
            {
                path: '/login',
                element: (<AuthLayout authentication={false}><Login/></AuthLayout>),
                errorElement:<ErrorPage/>
            },
            {
                path: '/register',
                element: (<AuthLayout authentication={false}><Register/></AuthLayout>),
                errorElement:<ErrorPage/>
            },
            {
                path:'/create_challenge',
                element: (<AuthLayout authentication={true}><CreateChallenge/></AuthLayout>),
                errorElement:<ErrorPage/>
            },
            {
                path:'/challenges/:id',
                element: (<AuthLayout authentication={true}><SingleChallenge/></AuthLayout>),
                errorElement:<ErrorPage/>
            },
            {
                path:'/edit/:id',
                element: (<AuthLayout authentication={true}><CreateChallenge/></AuthLayout>),
                errorElement: <ErrorPage/>
            },
            {
                path:'my_profile',
                element: (<AuthLayout authentication={true}><UserInfo/></AuthLayout>),
                errorElement: <ErrorPage/>
            }

        ]
    }
])