import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Dropdown = ({marTop, mar}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <div className="cursor-pointer">
            <FaRegUserCircle className="text-3xl text-[#0766AD]" onClick={()=> setIsShow(!isShow)}></FaRegUserCircle>
            </div>
            {
                isShow && <div className={`shadow-lg rounded-md z-10 bg-white absolute px-8 py-2  ${mar} ${marTop}`}>
                    <div className="py-1 font-semibold">Mahbub Rahman</div>
                    <div className="py-1 font-bold"><Link>Dashboard</Link></div>
                    <div className="py-1 font-bold">
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;