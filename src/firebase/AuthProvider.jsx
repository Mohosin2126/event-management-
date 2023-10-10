import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase/firebase.config"
export const AuthContext=createContext(null);
const auth = getAuth(app)
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
const googleSignIn=(value)=>{
    return signInWithPopup(auth,googleProvider)
}

 useEffect (()=>{
 const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log("user in the auth statechanged",currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
 },[])


    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;