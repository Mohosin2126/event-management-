import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../Components/SingleCard";

const ServiceDetails = () => {
   const {id}=useParams()
  const [singleData,setSingleData]=useState([])

useEffect(()=>{
    fetch("/data.json")
    .then(res=>res.json())
    .then(data=>{
     const allData = data.filter((data)=>data.id==id)
        setSingleData(allData)
    })
  
},[])
    return (
        <div>
            <h1 className="text-center font-bold text-3xl">
                Event Details
            </h1>
            <div>
              {
                singleData.map(single=><SingleCard single={single} key={single.id}></SingleCard>)
              }
            </div>
        </div>
    );
};

export default ServiceDetails;