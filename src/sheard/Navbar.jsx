import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ContextProvider } from '../auth/AuthProvider';
import Dropdown from './Dropdown';
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

    const { user } = useContext(ContextProvider);
    
    const navbar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/apartment'>Apartment</Link></li>
    </>


    return (
        <div className='shadow-md'>
            <div className="drawer z-20 container mx-auto">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className='w-60' src="https://i.ibb.co/zRS2dd2/Screenshot-54-removebg-preview.png" alt="" />
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal uppercase text-xl font-semibold">
                                {navbar}
                            </ul>

                            {
                                user ? <Dropdown  mar={'right-0'} marTop={'mt-9'}></Dropdown> :
                                    <Link to='/login'>
                                        <FaRegUserCircle className="text-3xl text-[#0766AD]" ></FaRegUserCircle>
                                    </Link>
                            }
                        </div>
                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4  min-h-full uppercase text-xl font-semibold bg-base-200">
                        {navbar}
                        <div className='ml-4'>
                            {
                                user ? <Dropdown  mar={'right-0'} marTop={'mt-9'}></Dropdown> :
                                    <Link to='/login'>
                                        <FaRegUserCircle className="text-3xl text-[#0766AD]" ></FaRegUserCircle>
                                    </Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;