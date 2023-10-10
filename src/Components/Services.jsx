import { Link } from "react-router-dom";


const Services = ({service}) => {
    const {id,name,description,price,image}=service
    return (
        <div>
        
           <div className="grid grid-cols-3">
            <div className="card card-compact w-96  h-96 bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="font-mono font-medium">{description}</p>
    <p>{price}</p>
    <div className="card-actions mt-5 ">
    <Link to={`/serviceDetails/${id}`}> <button className="btn   hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
           
        </div>
    );
};

export default Services;