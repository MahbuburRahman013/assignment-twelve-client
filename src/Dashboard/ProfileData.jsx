import {FaKey} from 'react-icons/fa';

const ProfileData = () => {
    return (
        <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Agreement Accept Date
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Building
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Floor
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Room No
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Key
                            </th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-6">{item.acceptDate}</td>
                                <td className="py-2 px-6">{item.building}</td>
                                <td className="py-2 px-6">{item.floor}</td>
                                <td className="py-2 px-6">{item.roomNo}</td>
                                <td className="py-2 px-6">
                                    <FaKey className="text-gray-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default ProfileData;