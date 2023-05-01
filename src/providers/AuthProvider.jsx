import React, {createContext, useEffect, useState} from 'react';
import app from "../firebase/firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userUpdateProfile = (auth, data) => {
        return updateProfile(auth, data);
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // user observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
        });
        
        return () => {
            unsubscribe();
        }
    },[]);
    
    const logOut = () => {
        return signOut(auth);
    }
    
    const authInfo = {
        user,
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