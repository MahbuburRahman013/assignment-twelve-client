import { useForm} from 'react-hook-form';
import useAxiosSecure from '../hooks/useAxiosSecure';


const MakeAnnounce = () => {
    const { handleSubmit, register } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
            const announcement = {
                title:data.title,
                description: data.description
            }
               
            axiosSecure.post('/announcement', announcement)
            .then(res=> {
                   if(res.data.acknowledged){
                           alert('create announcement successfully')
                           data.reset()
                   }
            })
    };

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-semibold mb-4">Make Announcement</h2>

                    {/* Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register('title', { required: 'Title is required' })}
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register('description', { required: 'Description is required' })}
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                   

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAnnounce;