import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign up or create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const authentication = {
        googleLogin,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;