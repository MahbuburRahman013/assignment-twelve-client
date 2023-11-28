import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCouponAvail = () => {
     const axiosSecure = useAxiosSecure()

    const {data: coupons = []} = useQuery({
        queryKey: ['coupons-available'],
        queryFn: async()=> {
               const res = await axiosSecure.get('coupons-available')
               return res.data;
        }
  })

    return [coupons]
};

export default useCouponAvail;