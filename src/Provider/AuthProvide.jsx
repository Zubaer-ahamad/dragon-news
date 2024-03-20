import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = { user, loading, createUser, logIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;

AuthProvide.propTypes = {
    children: PropTypes.node
};