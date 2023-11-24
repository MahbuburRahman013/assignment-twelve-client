import { createBrowserRouter } from "react-router-dom";
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
            
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/registration',
        element:<Registration></Registration>
    }
]);

export default router;