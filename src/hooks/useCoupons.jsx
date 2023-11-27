import useAxiosSecure from "./useAxiosSecure";
import {useQuery} from '@tanstack/react-query'


const useCoupons = () => {
      const axiosSecure = useAxiosSecure();

      const {data: coupons = [], refetch} = useQuery({
          queryKey: ['coupons'],
          queryFn: async () =>{
                const res = await axiosSecure.get('/all-coupons')
                return res.data;
          }
      })
    

    return[coupons,refetch]
};

export default useCoupons;