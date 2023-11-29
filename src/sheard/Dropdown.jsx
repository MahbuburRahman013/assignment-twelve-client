import { useContext } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { ContextProvider } from "../auth/AuthProvider";
import toast from 'react-hot-toast';

const Dropdown = ({marTop, mar}) => {
    const [isShow, setIsShow] = useState(false);
    const {logOutUser , user} = useContext(ContextProvider);



const handleLogout = () => {
     logOutUser()
     .then(()=>{
          toast.success('sign out successfully')
     })
}

    return (
        <div>
            <div className="cursor-pointer">
                <img onClick={()=> setIsShow(!isShow)} className="w-8 h-8 border-2 border-blue-500 rounded-full" src={user?.photoURL} alt="" />
            
            </div>
            {
                isShow && <div className={`shadow-lg rounded-md z-10 bg-white absolute px-8 py-2  ${mar} ${marTop}`}>
                    <div className="py-1 font-semibold">{user?.displayName}</div>
                    <div className="py-1 font-bold"><Link to='/dashboard'>Dashboard</Link></div>
                    <div className="py-1 font-bold">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;