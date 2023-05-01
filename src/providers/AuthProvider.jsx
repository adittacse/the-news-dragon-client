import React, {createContext} from 'react';
import app from "../firebase/firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = null;
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userUpdateProfile = (auth, data) => {
        return updateProfile(auth, data);
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {
        user,
        createUser,
        userUpdateProfile,
        signIn,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;