import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateProfileUser = (update) => {
        return updateProfile(auth.currentUser, update)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const signOutUser = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        signUpUser,
        signInUser,
        googleSignIn,
        updateProfileUser,
        signOutUser,
        loading,
        isDarkMode,
        toggleTheme
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;