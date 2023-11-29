import NavbarDA from "../NavbarDA";
import { Outlet } from 'react-router-dom';



const LayoutDA = () => {


    return (
        <div className="grid grid-cols-10">
            <div className="lg:col-span-2 md:col-span-3 hidden md:block"><NavbarDA></NavbarDA></div>

            
                    <details className="absolute z-10 md:hidden w-full" open>
                        <summary className="bg-[#172554] px-2 rounder-t-md text-gray-100 font-semibold py-2">Navbar</summary>
            
                                <div open><NavbarDA></NavbarDA></div> 
                    </details>
                
            

            <div className="lg:col-span-8 mt-9 md:mt-0 col-span-10 md:col-span-7"><Outlet></Outlet></div>
        </div>
    );
};

export default LayoutDA;