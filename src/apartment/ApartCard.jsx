import { FaBed, FaBath, FaSquare, FaMoneyBillAlt } from 'react-icons/fa';

const ApartCard = ({ apartment }) => {
    const { apartmentImage, apartmentNo, blockName, floorNo, rent } = apartment;

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
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Agreement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApartCard;