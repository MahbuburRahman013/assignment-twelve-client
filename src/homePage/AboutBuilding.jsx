import { useEffect } from "react";
import TitleCom from "../sheard/TitleCom";
import Aos from "aos";
import 'aos/dist/aos.css'

const AboutBuilding = () => {
    
    useEffect(()=> {
          Aos.init()     
    },[])

    return (
        <div>
            <section className=" py-16 my-16">
                <div className="container mx-auto px-2 lg:px-0">

                    <TitleCom title={'About the Building'}></TitleCom>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-14 justify-between">

                        <div data-aos="flip-right" data-aos-duration="1500" className="lg:w-[50%] text-gray-700 text-lg leading-relaxed">
                            <h1 className="text-2xl font-semibold my-3">Modern Urban Retreat</h1>
                            <p>
                            Welcome to our modern urban retreat, nestled in the heart of the city. This chic and stylish rental building offers a sophisticated living experience with state-of-the-art amenities. 
                            </p>
                            <h1 className="text-2xl font-semibold my-3">Luxury Living Redefined</h1>
                            <p>
                            Experience luxury living redefined in our exclusive rental building. Immerse yourself in the epitome of elegance and comfort, where every detail is meticulously crafted. From spacious interiors to breathtaking views,
                            </p>
                            <h1 className="text-2xl font-semibold my-3">Tranquil Riverside Haven</h1>
                            <p>
                            Escape to a tranquil riverside haven with our premium rental building. Discover the perfect blend of serene surroundings and modern convenience. Wake up to the soothing sounds of the river, unwind in beautifully landscaped gardens.
                            </p>

                        </div>

                        <div data-aos="flip-left" data-aos-duration="1500" className="grid md:gap-7 gap-2 grid-cols-2 lg:w-[50%]">
                            <div className="">
                                <img className="h-full  rounded-lg shadow-md shadow-blue-500" src="https://i.ibb.co/QPvtqvW/161230725.jpg" alt="" />
                            </div>
                            <div className="row-span-2 h-full">
                                <img className="row-span-2 h-full rounded-lg shadow-md shadow-blue-500" src="https://i.ibb.co/dLqdgd5/1.jpg" alt="" />
                            </div>

                            <div className="">
                                <img className=" h-full rounded-lg shadow-md shadow-blue-500" src="https://i.ibb.co/Z2NmK83/172222740.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutBuilding;