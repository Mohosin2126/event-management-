import { useLoaderData } from "react-router-dom";
import Banner from "../../../Components/Banner";
import Services from "../../../Components/Services";
import ContactWithUs from "./ContactWithUs";



const Home = () => {

const services=useLoaderData()


    return (
        <div>
<Banner></Banner>
<div className="mt-20">
<h1 className="text-center font-bold text-3xl">Our Events</h1>
<p className="text-center mt-5 font-semibold"> Let us bring the magic to your social events! Our team excels in crafting personalized and memorable experiences that leave smiles on everyone's faces.</p>
<div className="grid lg:grid-cols-3 mt-10 gap-10" >
    
{
    services.slice(0,6).map(service=><Services service={service} key={service.id}></Services>)
}
</div>
</div>
<div className="text-center font-bold text-xl mt-10 mb-10 ">
    
<ContactWithUs></ContactWithUs>
</div>

        </div>
    );
};

export default Home;