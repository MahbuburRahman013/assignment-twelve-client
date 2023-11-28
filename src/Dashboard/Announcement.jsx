import { GrAnnounce } from "react-icons/gr";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleCom from '../sheard/TitleCom';
import { useQuery } from '@tanstack/react-query'

const Announcement = () => {
       const axiosSecure = useAxiosSecure()

       const {data: announcements = []} = useQuery({
             queryKey: ['all-announcement'],
             queryFn: async () => {
                  const res = await axiosSecure.get('/announcement')
                  return res.data;
             }
       })
  

    return (
        <div>
            <div className="min-h-screen  bg-gray-100">
                   <div className='py-10'><TitleCom title={'Announcements'}></TitleCom></div>  

            
                   <div className='w-[80%] mx-auto'>
                   {announcements.map((announcement, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex items-center mb-2">
                                <GrAnnounce className="text-xl mr-2 text-blue-500" />
                                <div className="text-lg font-bold">{announcement.title}</div>
                            </div>
                            <p className="text-gray-600">{announcement.description}</p>
                        </div>
                    ))}
                   </div>
            </div>
        </div>
    );
};

export default Announcement;