import { NavLink } from 'react-router-dom';
import useUserRole from '../hooks/useUserRole';

const NavbarDA = () => {
    const { userRole } = useUserRole();
    const role = userRole?.role


    return (
        <div className="lg:min-h-screen h-full  bg-blue-950">
            <div className="flex-1 pt-7 pb-3 md:pb-16 px-2 mx-2">
                <img className='md:w-60 w-40' src="https://i.ibb.co/zRS2dd2/Screenshot-54-removebg-preview.png" alt="" />
            </div>
            {
                role === 'admin' ?

                    <>
                        <NavLink to='/dashboard/admin-profile'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'>Admin profile</div></NavLink>

                        <NavLink to='/dashboard/make-announce'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Make Announcement</div></NavLink>

                        <NavLink to='/dashboard/manage-member'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Manage Members</div></NavLink>

                        <NavLink to='/dashboard/agreement'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Agreement Request</div></NavLink>

                        <NavLink to='/dashboard/manage-coupon'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Manage Coupons</div></NavLink>
                    </>


                    :
                    role === 'member' ?


                        <>
                            <NavLink to='/dashboard/member-profile'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'>Member profile</div></NavLink>

                            <NavLink to='/dashboard/make-payment'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Make Payment</div></NavLink>

                            <NavLink to='/dashboard/payment-history'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Payment History</div></NavLink>

                            <NavLink to='/dashboard/'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Announcements</div></NavLink>
                        </>


                        :
                        
                       <>
                       <NavLink to='/dashboard/user-profile'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'>profile</div></NavLink>

                       <NavLink to='/dashboard/'><div className='text-base py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'>Announcements</div></NavLink>
                       </>

            }
            




        </div>
    );
};

export default NavbarDA;