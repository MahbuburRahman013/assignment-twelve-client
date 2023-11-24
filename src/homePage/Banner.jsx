import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../index.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';


const Banner = () => {
    const [coupon, setCoupon] = useState('COUPON20')
    const [couponBtn, setCouponBtn] = useState('copy coupon')

    const handleCopyCoupon = () => {
        navigator.clipboard.writeText(coupon)
        setCouponBtn('Copied!')
        setTimeout(()=> {
            setCouponBtn('copy coupon')
        },2000)
    }


    return (
        <div className='h-[90vh] bg-[url("https://img.freepik.com/premium-vector/simple-background_883298-9.jpg")] bg-cover bg-no-repeat'>
            <div className='flex justify-between items-center h-[90vh] container mx-auto'>
            <div className='w-1/2'>
                  <h1 className='text-6xl font-bold'>Elevate Your Building Manage<span className='text-blue-600'>ment Experience.</span>
                  </h1>
                  <div className='bg-blue-200 w-2/3 mt-10 flex justify-between rounded-md'>
                    <h1 className='anim text-3xl pt-8 px-10 font-bold'>20% OFF</h1>
                    <div className='bg-blue-500 flex-1 rounded-r-md py-3 flex items-center justify-center flex-col'>
                        <div className='py-1 text-gray-50 font-semibold text-xl rounded-md'>{coupon}</div>
                        <button onClick={handleCopyCoupon} className='border px-3 py-1 text-gray-50 font-semibold text-xl rounded-md my-3'>{couponBtn}</button>
                    </div>
                  </div>
            </div>
            <div className='w-1/2  shadow-lg shadow-blue-700 rounded-lg'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full h-full rounded-lg' src="https://i.ibb.co/dm4P1Vc/633d198512b3667b11eed9e5-Hero-Harmony-Heights.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-lg' src="https://i.ibb.co/fq1N9HY/100-0071-1024x768.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-lg' src="https://i.ibb.co/Gv1VzT7/3fa761c918b724afc72dfc1712bad14c-full.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-lg' src="https://i.ibb.co/TYCNVKS/100-0068-1024x768.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </div>
    );
};

export default Banner;