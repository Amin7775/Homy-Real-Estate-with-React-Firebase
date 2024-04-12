import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root/Root"
import Home from "../pages/Home/Home"
import Estates from "../pages/Estates/Estates"



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
            }
        ]
    }
])

export default router