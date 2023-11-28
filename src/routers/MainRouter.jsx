import { createBrowserRouter } from "react-router-dom";
import Apartment from "../apartment/Apartment";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import Agreement from "../Dashboard/Agreement";
import Announcement from "../Dashboard/Announcement";
import LayoutDA from "../Dashboard/Layout/LayoutDA";
import MakeAnnounce from "../Dashboard/MakeAnnounce";
import ManageCoupon from "../Dashboard/ManageCoupon";
import ManegeMember from "../Dashboard/ManegeMember";
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
                path:'user-profile',
                element: <Profile></Profile>, 
            },
            {
                path:'member-profile',
                element: <MemberProfile></MemberProfile>,
                
            },
            {
                path:'admin-profile',
                element:<AdminProfile></AdminProfile>

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
            },
            {
                path: 'manage-member',
                element: <ManegeMember></ManegeMember>
            },
            {
                path: 'make-announce',
                element: <MakeAnnounce></MakeAnnounce>
            }
        ]
    }
]);

export default router;