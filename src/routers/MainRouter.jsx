import { createBrowserRouter } from "react-router-dom";
import Apartment from "../apartment/Apartment";
import Agreement from "../Dashboard/Agreement";
import Announcement from "../Dashboard/Announcement";
import LayoutDA from "../Dashboard/Layout/LayoutDA";
import ManageCoupon from "../Dashboard/ManageCoupon";
import PaymentHistory from "../Dashboard/PaymentHistory";
import Payment from "../Dashboard/paymentPage/Payment";
import PaymentForm from "../Dashboard/paymentPage/PaymentForm";
import Profile from "../Dashboard/Profile";
import MemberProfile from "../Dashboard/profiles/MemberProfile";
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
                path:'/dashboard/user-profile',
                element: <Profile></Profile>, 
            },
            {
                path:'/dashboard/member-profile',
                element: <MemberProfile></MemberProfile>,
                
            },
            {
                path:'/dashboard/',
                element: <Announcement></Announcement>,
                
            },
            {
                path: 'agreement',
                element: <Agreement></Agreement>
            },
            {
                path: 'make-payment',
                element: <PaymentForm></PaymentForm>
            },
            {
                path: 'payment/:month',
                element: <Payment></Payment>
            },
            {
                path: 'manage-coupon',
                element: <ManageCoupon></ManageCoupon>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);

export default router;