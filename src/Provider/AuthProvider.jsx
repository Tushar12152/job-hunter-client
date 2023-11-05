import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase.config";

export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
const [loading,setLoading]=useState(true)
const [user,setUser]=useState(true)
const googleProvider=new GoogleAuthProvider()


const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
   return signOut(auth)
}

const googleSignUp=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false)
    })

    return ()=>{
        return unsubscribe()
    }
},[])







const authInfo={
    loading,
    user,
    createUser,
    googleSignUp,
    logOut,
    login,
    
    
  

}

    return (
    <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
     children:PropTypes.node,

}
export default AuthProvider;