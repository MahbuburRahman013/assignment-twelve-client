import { useForm } from "react-hook-form"
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCoupons from "../hooks/useCoupons";
import toast from 'react-hot-toast';

const ManageCoupon = () => {
   const {
        register,
        handleSubmit,
    } = useForm()
   const axiosSecure = useAxiosSecure(); 
   const [coupons, refetch] = useCoupons();
   

    const onSubmit = (data) => {
        
        const couponData = {
             couponCode: data.couponCode,
             discount: data.discount,
             description: data.description,
             available: 'yes',
        };
      axiosSecure.post('/coupon-add', { couponData })
      .then(res=> {
           if(res.data){
            toast.success('coupon added')
            refetch()
           }
           
      })         
        
    };

    const handleDisable = id => {

        axiosSecure.patch(`/coupon/${id}`)
        .then(res=> {
              if(res.data.modifiedCount > 0){

                  toast.success('coupon disabled!!')
                  refetch();
              }
              
        })
    }



    return (
        <div className='mt-12'>
            <div className='w-[80%] mx-auto  my-10'>
                <div className="bg-white rounded-lg overflow-auto">
                    <div>
                        <div className="flex justify-center mb-5">
                            <button className="btn text-center" onClick={() => document.getElementById('my_modal_5').showModal()}>Add</button>
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input placeholder="coupon code" className="w-full p-2 block border rounded bg-gray-200 my-5"  {...register("couponCode")} />

                                    <input 
                                           type='number'
                                           placeholder="discount percentage" 
                                           className="w-full p-2 block border rounded bg-gray-200 my-5" {...register ("discount")} />

                                    <input placeholder="coupon description" className="w-full p-2 block border rounded bg-gray-200 my-5" {...register("description")} />

                                    <input className="bg-blue-400 py-1 px-3 rounded-md text-white font-semibold" type="submit" />
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-sm">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Coupon code
                                </th>
                                <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Discount percentage
                                </th>
                                <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Coupon description
                                </th>
                                <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Make Unavailable
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {coupons.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-3 border-r text-center">{item.couponCode}</td>
                                <td className="py-2 px-3 border-r text-center">{item.discount}%</td>
                                <td className="py-2 px-3 border-r text-center">{(item.description)}</td> 
                                <td className="py-2 px-3 border-r text-center">{
                                    item.available === 'yes'?
                                    <button onClick={()=>handleDisable(item._id)} className="btn btn-sm btn-warning">Disable</button>:
                                    <p className="text-red-600 font-semibold">Disabled</p>
                                }</td> 
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupon;