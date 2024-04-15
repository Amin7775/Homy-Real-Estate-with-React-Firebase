import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root/Root"
import Home from "../pages/Home/Home"
import Estates from "../pages/Estates/Estates"
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile"
import ViewDetails from "../pages/ViewDetails/ViewDetails"
import Login from "../pages/Login/Login"



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:`/viewdetails/:id`,
                loader: ()=>fetch('/estate.json'),
                element: <ViewDetails></ViewDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router