import { useContext } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContextProvider } from '../auth/AuthProvider';
import ProfileData from './ProfileData';

const Profile = () => {
    const { user } = useContext(ContextProvider);

    return (
        <div className='mt-12'>
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
            <div className='w-[80%] mx-auto my-10'>
                <ProfileData></ProfileData>
            </div>
        </div>
    );
};

export default Profile;