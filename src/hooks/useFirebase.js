import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuth from "../components/shared/Firebase/firebase.init";

initializationAuth();

const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const registerWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://i.ibb.co/HYYPS64/placeholder.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {

    fetch(`https://warm-coast-92298.herokuapp.com/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data),setIsAdminLoading(false));
  }, [user?.uid]);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  return {
    registerWithEmailPassword,
    setError,
    setUser,
    loginWithEmailPassword,
    user,
    error,
    isLoading,
    logout,
    updateUserProfile,
    isAdmin,
    setIsLoading,
    isAdminLoading,
  };
};
export default useFirebase;
