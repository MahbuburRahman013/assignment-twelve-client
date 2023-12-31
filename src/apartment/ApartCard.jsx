import { useContext } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ContextProvider } from '../auth/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast'

const ApartCard = ({ apartment }) => {
    const { apartmentImage, apartmentNo, blockName, floorNo, rent , id } = apartment;
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(ContextProvider); 
    
    
    

const handleAddApartment = () =>{
    
   
    if(!user?.email){
          return toast.error('You are not login user!')
    }
    
    const today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
      
    const apartmentData = {
        floorNo,
        blockName,
        apartmentNo,
        date: `${dd}-${mm}-${yy}`,
        id,
        rent,
        status: 'pending',
        userName: user?.displayName,
        userEmail: user?.email, 
    }
   
    axiosSecure.post(`/apartment`, apartmentData)
    .then(res=> {
        
        if(res?.data?.acknowledged){
            toast.success('Request send successfully')
        }
        if(res?.data?.message){
            toast.error('already added')
        }
        console.log(res.data)
    })
    
}


    return (
        <div>
            <div className="max-w-sm mx-auto  overflow-hidden shadow-lg rounded-md">
                <img className="w-full h-48 object-cover" src={apartmentImage} alt={`Apartment ${apartmentNo}`} />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {blockName}-block
                    </div>
                    <div className="font-semibold text-xl mb-2">
                        Apartment-No: {apartmentNo}
                    </div>
                    <p className="text-gray-700 text-base">
                        Floor {floorNo}
                    </p>
                    
                    <div className="flex items-center mt-2">
                        <FaMoneyBillAlt className="mr-2" />
                        <span className="text-green-500 font-bold">${rent}</span>
                        <span className="text-gray-700 ml-2">/ month</span>
                    </div>
                </div>

                <div className="px-6 py-4">
                    <button onClick={ handleAddApartment } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Agreement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApartCard;