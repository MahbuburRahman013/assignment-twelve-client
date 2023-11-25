import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from "../firebase.config";
import { useEffect } from "react";

const ContextProvider = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

 
    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
        
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=> {
          const unSubsCriber = onAuthStateChanged(auth, currentUser=> {
               setUser(currentUser);
               setLoading(false);
          });
         
          return()=>{
            return unSubsCriber;
          }
          
    }, [])


const authInfo = {
      createUser,
      signInUser,
      signInGoogle,
      loading,
      user,
      logOutUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;