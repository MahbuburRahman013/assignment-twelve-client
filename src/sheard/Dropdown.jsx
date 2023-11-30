import { useContext } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ContextProvider } from "../auth/AuthProvider";
import toast from 'react-hot-toast';
import { IoLogOutOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Dropdown = ({ marTop, mar }) => {
    const [isShow, setIsShow] = useState(false);
    const { logOutUser, user } = useContext(ContextProvider);



    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('sign out successfully')
            })
    }

    return (
        <div>
            <div className="cursor-pointer">
                <img onClick={() => setIsShow(!isShow)} className="w-8 h-8 border-2 border-blue-500 rounded-full" src={user?.photoURL} alt="" />

            </div>
            {
                isShow && <div className={`shadow-lg rounded-md z-10 bg-white absolute px-8 py-2  ${mar} ${marTop}`}>
                    <div className="py-1 lg:font-semibold flex gap-1 items-center"><FaUserAlt></FaUserAlt><p>{user?.displayName}</p></div>

                    <div className="py-1 lg:font-bold flex gap-1 items-center">
                        <Link to='/dashboard'>
                        <button className="flex gap-1 items-center"><MdDashboard></MdDashboard>Dashboard</button>
                        </Link>
                        
                    </div>

                    <div className="py-1 lg:font-bold">
                        <button className="flex gap-1 items-center" onClick={handleLogout}><IoLogOutOutline></IoLogOutOutline>Logout</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;