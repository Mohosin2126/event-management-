import { Link } from "react-router-dom";

const EventsCard = ({singleEvents}) => {
    
    return (
        <div>
            <div className="card card-compact w-96  h-96 bg-base-100 shadow-xl">
  <figure><img className="h-[300px]" src={singleEvents.image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{singleEvents.name}</h2>
    <p>{singleEvents.price}</p>
    <p>{singleEvents.description}</p>
    <div className="card-actions ">
    <Link  ><button className="btn w-30 btn-secondary "> Book now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default EventsCard;