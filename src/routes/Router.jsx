import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root/Root"
import Home from "../pages/Home/Home"
import Estates from "../pages/Estates/Estates"
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile"
import ViewDetails from "../pages/ViewDetails/ViewDetails"



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
            }
        ]
    }
])

export default router