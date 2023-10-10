

const SingleCard = ({single}) => {

    
    return (
        <div className="card w-full bg-base-100 shadow-xl my-10">
  <figure><img src={single.image} alt="Shoes" /></figure>
  <div className="card-body ml-10">
    <h2 className="card-title">{single.name}</h2>
    <p>{single.briefDescription}</p>
    <div className="card-actions ">
      <button className="btn btn-secondary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default SingleCard;