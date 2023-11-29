import {Outlet} from 'react-router-dom';
import Footer from '../sheard/Footer';
import Navbar from '../sheard/Navbar';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;