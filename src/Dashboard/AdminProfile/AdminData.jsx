import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbHomeOff } from "react-icons/tb";



const AdminData = () => {
    const axiosSecure = useAxiosSecure();

    const { data: adminData = {} } = useQuery({
        queryKey: ['admin_profile-data'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-profile-data')
            return res.data;
        }
    })

    
    const parRentedRoom = ( adminData.rentedRooms / adminData.allRooms) * 100;
    const availableRoom = parseFloat(parRentedRoom).toFixed(2)

    return (
        <div className="w-[90%] mx-auto mt-10 flex justify-center items-center flex-wrap gap-5">
            <div className="bg-gradient-to-tr from-[#00C1D0] to-[#0A0F44] py-4 px-7 rounded-md text-center text-gray-100 ">
                <div className="flex gap-2 items-center justify-center text-2xl font-semibold uppercase">
                    <FaHome></FaHome>
                    <h1>Rooms</h1>
                </div>
                <p className="text-4xl font-bold">{adminData?.allRooms}</p>
            </div>

            <div className="bg-gradient-to-tr from-[#350068] to-[#FF6978] py-4 px-2 rounded-md text-center text-gray-100 ">
                <div className="flex gap-2 items-center justify-center text-2xl font-semibold uppercase">
                    <IoIosPeople></IoIosPeople>
                    <h1>members</h1>
                </div>
                <p className="text-4xl font-bold">{adminData?.members}</p>
            </div>

            <div className="bg-gradient-to-tr from-[#EEBBD5] to-[#2F284E] py-4 px-7 rounded-md text-center text-gray-100 ">
                <div className="flex gap-2 items-center justify-center text-2xl font-semibold uppercase">
                    <FaCircleUser></FaCircleUser>
                    <h1>users</h1>
                </div>
                <p className="text-4xl font-bold">{adminData?.users}</p>
            </div>

            <div className="bg-gradient-to-tr from-[#870057] to-[#A5303F] py-4 px-7 rounded-md text-center text-gray-100 ">
                <div className="flex gap-2 items-center justify-center text-2xl font-semibold uppercase">
                    <FaHome></FaHome>
                    <h1>available</h1>
                </div>
                <p className="text-4xl font-bold">{parseFloat(100 - availableRoom).toFixed(2)}%</p>
            </div>

            <div className="bg-gradient-to-tr from-[#DA3068] to-[#14469F] py-4 px-7 rounded-md text-center text-gray-100 ">
                <div className="flex gap-2 items-center justify-center text-2xl font-semibold uppercase">
                    <TbHomeOff></TbHomeOff>
                    <h1>unavailable</h1>
                </div>
                <p className="text-4xl font-bold">{availableRoom}%</p>
            </div>
        </div>
    );
};

export default AdminData;