import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Pages/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-8">
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Layout;