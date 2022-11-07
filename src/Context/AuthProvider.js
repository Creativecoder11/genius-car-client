import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FireBase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    }

    const logOut =()=> {
        localStorage.removeItem('token')
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user, 
        loading,
        createUser,
        login,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider
            value={authInfo}
            
            >{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;