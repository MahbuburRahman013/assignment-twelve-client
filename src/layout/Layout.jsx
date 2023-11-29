import {Outlet} from 'react-router-dom';
import Footer from '../sheard/Footer';
import Navbar from '../sheard/Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Layout;