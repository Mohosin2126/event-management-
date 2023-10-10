import { useEffect, useState } from "react";
import EventsCard from "../Components/EventsCard";


const Events = () => {
   const [allServices,setAllServices]=useState([])
   useEffect(()=>{
    fetch("../../public/data.json")
    .then(res=>res.json())
    .then(data=>setAllServices(data))
    console.log(allServices)
   },[])

    return (
        <div >
            <h1 className="mt-20 font-semibold text-center text-3xl ">Our Events </h1>
           <div className="grid lg:grid-cols-3 gap-10 mt-10">
           {
            allServices.map(singleEvents=><EventsCard singleEvents={singleEvents} key={singleEvents.id}></EventsCard>)
           }
           </div>
        </div>
    );
};

export default Events;