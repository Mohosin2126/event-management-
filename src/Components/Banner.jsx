import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
       <div className="relative ">
         <div className="hero h-[550px] mt-5" style={{ backgroundImage: 'url(https://i.ibb.co/zHTbBW6/social-media-event-promotion-940x470.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div >
                    <h1 className="mb-5 text-4xl font-semibold text-center">If there is one thing we are good at it's gathering people together to do something fun </h1>
                    <div className="flex max-w-md mx-auto">
                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                        <button className="btn btn-neutral bg-red-500">Search</button>
                    </div>
                </div>
            </div>




        </div>
        


        <div className="h-24 w-full bg-slate-500 border rounded-lg absolute -bottom-8 flex mr-10 items-center gap-2">
        <Link to={"/login"} ><button className="btn w-30 btn-secondary "> Book now</button></Link>
        <Marquee pauseOnHover={true} speed={100}><Link ><h1 className="text-center text-black font-lg text-xl mr-10 ">Limited Time Offer: Advance Birthday Event Booking Special </h1></Link>
        <Link ><h1 className="text-center text-black font-lg text-xl mr-10 ">Limited Time Offer: Advance Birthday Event Booking Special </h1></Link>
        <Link ><h1 className="text-center text-black font-lg text-xl mr-10 ">Limited Time Offer: Advance Birthday Event Booking Special </h1></Link>
        <Link ><h1 className="text-center text-black font-lg text-xl mr-10 ">Limited Time Offer: Advance Birthday Event Booking Special </h1></Link>
        </Marquee>  
           
        </div>
       </div>
    );
};

export default Banner;
