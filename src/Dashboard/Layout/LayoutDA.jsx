import NavbarDA from "../NavbarDA";
import {Outlet} from 'react-router-dom';


const LayoutDA = () => {
    return (
        <div className="grid grid-cols-10">
            <div className="col-span-2"><NavbarDA></NavbarDA></div>
            <div className="col-span-8"><Outlet></Outlet></div>
        </div>
    );
};

export default LayoutDA;