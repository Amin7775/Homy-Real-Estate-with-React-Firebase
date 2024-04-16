import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root/Root"
import Home from "../pages/Home/Home"
import Estates from "../pages/Estates/Estates"
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile"
import ViewDetails from "../pages/ViewDetails/ViewDetails"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Favorites from "../pages/Favorites/Favorites"
import PrivateRoute from "./PrivateRoute"
import ErrorPage from "../pages/ErrorPage/ErrorPage"



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/estates',
                element:<Estates></Estates>
            },
            {
                path:'/updateProfile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:`/viewdetails/:id`,
                loader: ()=>fetch('/estate.json'),
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/favorites',
                element:<PrivateRoute><Favorites></Favorites></PrivateRoute>
            }
        ]
    }
])

export default router