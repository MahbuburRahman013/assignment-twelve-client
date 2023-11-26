import { NavLink } from 'react-router-dom';

const NavbarDA = () => {
    return (
        <div className="h-screen bg-blue-950">
            <div className="flex-1 pt-7 pb-16 px-2 mx-2">
                <img className='w-60' src="https://i.ibb.co/zRS2dd2/Screenshot-54-removebg-preview.png" alt="" />
            </div>
            <NavLink to='/dashboard/'><div className='text-xl py-2 pl-10 text-gray-200 border-y border-gray-600 uppercase font-semibold'>profile</div></NavLink>
            <NavLink to='/dashboard/announcement'><div className='text-xl py-2 pl-10 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Announcements</div></NavLink>
            <NavLink to='/dashboard/agreement'><div className='text-xl py-2 pl-10 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Agreement Request</div></NavLink>
        </div>
    );
};

export default NavbarDA;