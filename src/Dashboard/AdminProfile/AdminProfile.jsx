import { useContext } from "react";
import { ContextProvider } from "../../auth/AuthProvider";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AdminData from "./AdminData";

const AdminProfile = () => {
    const { user } = useContext(ContextProvider);


    return (
        <div>
            <div className='mt-12 mx-3 md:mx-0'>
                <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                    <div className="relative">
                        <div className="bg-blue-500 ">
                            <img className='relative mx-auto top-12 border-4 border-white rounded-full w-32 h-32' src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="pt-12 pb-5 px-5">
                        <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
                        <p className="text-gray-600 mb-4"></p>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <p className="text-gray-700">{user?.email}</p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-gray-500 mr-2" />
                            <p className="text-gray-700">Jashore, Khulna</p>
                        </div>
                    </div>
                </div>
                <AdminData></AdminData>
            </div>
        </div>
    );
};

export default AdminProfile;