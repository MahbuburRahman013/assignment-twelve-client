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
import AdminPrivate from "../privateRoutes/AdminPrivate";
import MemberPrivate from "../privateRoutes/MemberPrivate";
import UserPrivate from "../privateRoutes/UserPrivate";
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
        element:<UserPrivate><LayoutDA></LayoutDA></UserPrivate>,
        children: [
            {     
                path:'user-profile',
                element: <UserPrivate><Profile></Profile></UserPrivate>, 
            },
            {
                path:'member-profile',
                element: <MemberPrivate><MemberProfile></MemberProfile></MemberPrivate>,
                
            },
            {
                path:'admin-profile',
                element:<AdminPrivate><AdminProfile></AdminProfile></AdminPrivate>

            },
            {
                path:'/dashboard/',
                element: <UserPrivate><Announcement></Announcement></UserPrivate>,
                
            },
            {
                path: 'agreement',
                element: <AdminPrivate><Agreement></Agreement></AdminPrivate>
            },
            {
                path: 'make-payment',
                element: <UserPrivate><PaymentForm></PaymentForm></UserPrivate>
            },
            {
                path: 'payment/:month',
                element: <UserPrivate><Payment></Payment></UserPrivate>
            },
            {
                path: 'manage-coupon',
                element: <AdminPrivate><ManageCoupon></ManageCoupon></AdminPrivate>
            },
            {
                path: 'payment-history',
                element: <MemberPrivate><PaymentHistory></PaymentHistory></MemberPrivate>
            },
            {
                path: 'manage-member',
                element: <AdminPrivate><ManegeMember></ManegeMember></AdminPrivate>
            },
            {
                path: 'make-announce',
                element: <AdminPrivate><MakeAnnounce></MakeAnnounce></AdminPrivate>
            }
        ]
    }
]);

export default router;