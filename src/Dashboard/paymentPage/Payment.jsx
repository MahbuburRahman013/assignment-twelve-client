import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import {  useParams } from "react-router-dom";
import { ContextProvider } from "../../auth/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import { useForm } from "react-hook-form"
import useCouponAvail from "../../hooks/useCouponAvail";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const {
        register,
        handleSubmit,
      } = useForm()
    
    const { month } = useParams();
    const [coupons] = useCouponAvail();
    
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(ContextProvider);
    
    
    const {data: memberData = []} = useQuery({
        queryKey: [user?.email,'member'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/member-data/${user?.email}`)
            return res.data;
        }
    });

    const rentData = memberData.reduce((current,item)=> item?.rent + current, 0);
    const [rent, setRent ] = useState(rentData);

    const onSubmit = data => {
              
              const couponArray = coupons.map(item=> [item.couponCode, item.discount]);
              const matchingElement = couponArray.find(item => item[0] === data.coupon);
               
              if(!matchingElement){
                 return alert('invalid coupon')
              }

              if(matchingElement){
                  alert('valid coupon')
                  const result = matchingElement ? matchingElement[1] : null;
                  const remainingRent = ((rentData / 100) * parseInt(result))
                  setRent(rentData - remainingRent)
                  
              }
              
              

    }

    return (
        <div className="w-[80%] my-10 mx-auto">
            <div className="border-2 py-5">
                <h1 className="text-xl font-semibold text-center my-5">All Rent: {rent}</h1>
                <div className="mb-24">
                     <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center gap-5">
                        <input {...register("coupon")} className="bg-gray-200 py-1 px-3 w-[35%]" type="text" />
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between" type="submit" value="Apply Coupon" />
                     </form>
                      
                </div>
                <div className="px-20">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm memberData={memberData} rent={rent} month={month}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;