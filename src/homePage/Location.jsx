import TitleCom from "../sheard/TitleCom";


const Location = () => {
    return (
        <div className="container mx-auto my-16">
            <TitleCom title={'location of Building'}></TitleCom>
            <div className="flex gap-8 justify-center items-center">

            <img className="w-[45%] h-[350px] rounded-md border-2 border-gray-300 " src="https://i.ibb.co/9NJy5Cc/russell-senate-office-building-03-ht-jc-180829-hp-Embed.jpg" alt="" />

            <div className="text-gray-700 text-lg leading-relaxed">
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