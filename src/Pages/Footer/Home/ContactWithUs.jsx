
const ContactWithUs = () => {
    return (
        <div >
             <h1 className="text-center font-bold text-xl mt-10 mb-10 ">contact with us </h1>
             <div className="hero  bg-base-200">
  <div style={{ backgroundImage: 'url(https://i.ibb.co/MkWNF00/question-multi-banner.jpg)' }} className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">We are here to help you </h1>
      <p className="py-6">Please don't hesitate to reach out to us if you have any questions or need further information</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="type your name " className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number </span>
          </label>
          <input type="text" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-ghost">submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactWithUs;