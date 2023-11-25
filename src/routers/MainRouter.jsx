import { createBrowserRouter } from "react-router-dom";
import Apartment from "../apartment/Apartment";
import Announcement from "../Dashboard/Announcement";
import LayoutDA from "../Dashboard/Layout/LayoutDA";
import Profile from "../Dashboard/Profile";
import Home from "../homePage/Home";
import Layout from "../layout/Layout";
import Login from "../login/Login";
import Registration from "../Registration/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: 'apartment',
                element: <Apartment></Apartment>
            }
            
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/registration',
        element:<Registration></Registration>
    },
    {   
        path:'/dashboard',
        element:<LayoutDA></LayoutDA>,
        children: [
            {
                path:'/dashboard/',
                element: <Profile></Profile> 
            },
            {
                path:'announcement',
                element: <Announcement></Announcement>
            }
        ]
    }
]);

export default router;