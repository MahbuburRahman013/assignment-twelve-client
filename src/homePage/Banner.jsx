import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../index.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useCouponAvail from '../hooks/useCouponAvail';
import CouponCard from './CouponCard';


const Banner = () => {
    const [coupons] = useCouponAvail()

    // const handleCopyCoupon = () => {
    //     navigator.clipboard.writeText(coupon)
    //     setCouponBtn('Copied!')
    //     setTimeout(() => {
    //         setCouponBtn('copy coupon')
    //     }, 2000)
    // }


    return (
        <>
            <div className='mb-32 lg:min-h-screen bg-[url("https://img.freepik.com/premium-vector/simple-background_883298-9.jpg")] bg-cover bg-no-repeat'>
                <div className='flex lg:flex-row pb-5 flex-col-reverse justify-between items-center lg:h-[80vh] container mx-auto'>
                    <div className='lg:w-1/2'>
                        <h1 className='lg:text-6xl text-xl px-2 md:text-3xl font-bold'>Elevate Your Building Manage<span className='text-blue-600'>ment Experience.</span>
                        </h1>
                    </div>
                    <div className='lg:w-1/2 md:w-2/3 w-full  mt-10 lg:mt-0 shadow-lg shadow-blue-700 rounded-lg'>
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
                                <img className='w-full h-[200px] lg:h-[450px] rounded-lg' src="https://i.ibb.co/dm4P1Vc/633d198512b3667b11eed9e5-Hero-Harmony-Heights.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-full h-[200px] lg:h-[450px] rounded-lg' src="https://i.ibb.co/fq1N9HY/100-0071-1024x768.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-full h-[200px] lg:h-[450px] rounded-lg' src="https://i.ibb.co/Gv1VzT7/3fa761c918b724afc72dfc1712bad14c-full.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-full h-[200px] lg:h-[450px] rounded-lg' src="https://i.ibb.co/TYCNVKS/100-0068-1024x768.jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='mb-10 flex flex-wrap gap-10 justify-center container mx-auto '>
                {
                    coupons.map(coupon => <CouponCard coupon={coupon} key={coupon._id}></CouponCard>)
                }
            </div>
        </>
    );
};

export default Banner;