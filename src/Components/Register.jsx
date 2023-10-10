import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";


const Register = () => {
const {createUser} =useContext(AuthContext)
const location =useLocation()
const naviGate=useNavigate()
const [registerError,setRegisterError]=useState("")
const [success,setSuccess]=useState("")
    const handleRegister= e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setRegisterError("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return 
        } 
        
setRegisterError("")
setSuccess("")

createUser(email,password)
.then(result=>{
  setSuccess("user created succesfully ")
    naviGate(location?.state? location.state:"/login")
})
.catch(error=>{
    console.error(error)
    setRegisterError(error.message)
})

    }
    return (
        <div>
           
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={ handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div> 
           
        </div>
    );
};

export default Register;