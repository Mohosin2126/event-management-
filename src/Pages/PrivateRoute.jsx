import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
const location=useLocation()
if(loading){
    return("it's loading")
}

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivateRoute;