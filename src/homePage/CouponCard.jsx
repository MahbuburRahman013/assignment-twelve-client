

const CouponCard = ({coupon}) => {

      const {couponCode, discount, description } = coupon;

    return (
        <div>
            <div className='bg-blue-200 w-[300px] rounded-md shadow-lg shadow-purple-500'>
                <h1 className='anim text-3xl text-center pt-8 px-10 font-bold'>{discount}% OFF</h1>
                <div className='bg-blue-500 flex-1 rounded-b-md  py-3 flex items-center justify-center flex-col'>
                    <div className='py-4 text-gray-50 font-semibold text-xl rounded-md'>Code: {couponCode}</div>
                    <p className="text-gray-100 px-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;