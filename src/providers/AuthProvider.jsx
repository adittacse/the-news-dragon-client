import React, {createContext, useEffect, useState} from 'react';
import app from "../firebase/firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userUpdateProfile = (auth, data) => {
        setLoading(true);
        return updateProfile(auth, data);
    }
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // user observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        
        return () => {
            unsubscribe();
        }
    },[]);
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    const authInfo = {
        user,
        loading,
        createUser,
        userUpdateProfile,
        signIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;