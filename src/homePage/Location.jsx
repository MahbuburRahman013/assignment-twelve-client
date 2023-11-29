import TitleCom from "../sheard/TitleCom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Location = () => {
    useEffect(()=> {
        Aos.init()     
  },[])


    return (
        <div className="container px-2 lg:px-0 mx-auto my-16">
            <TitleCom title={'location of Building'}></TitleCom>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">

            <img data-aos="flip-right" data-aos-duration="1500" className="lg:w-[45%] md:w-[70%] lg:h-[350px] rounded-md border-2 border-gray-300 " src="https://i.ibb.co/9NJy5Cc/russell-senate-office-building-03-ht-jc-180829-hp-Embed.jpg" alt="" />

            <div data-aos="flip-left" data-aos-duration="1500" className="text-gray-700 text-lg leading-relaxed">
                <h1 className="text-3xl font-semibold my-3">GoulHome Hub - Your Urban Sanctuary</h1>
                <p>Welcome to GoulHome Hub, a distinctive building management offering a unique urban sanctuary in the heart of the city. Nestled at a prime address, GoulHome Hub brings together modern living and convenience, creating an unparalleled experience for its residents.</p>
                <h1 className="text-3xl font-semibold my-3">Address</h1>
                <li>456 Central Avenue
                    Metropolis, Cityville</li>
                <h1 className="text-3xl font-semibold my-3">Key Features</h1> 
                <li><strong>Central Connectivity:</strong> GoulHome Hub provides residents with seamless access to major transportation hubs, making commuting to work, events, and entertainment venues effortless.</li>   
            </div>
            </div>
        </div>
    );
};

export default Location;