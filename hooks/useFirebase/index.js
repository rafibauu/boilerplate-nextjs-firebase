import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseInstance from "./sdk";

const useFirebase = () => {
  const auth = getAuth(firebaseInstance);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    return signOut(auth);
  };

  return {
    auth,
    login,
    logOut,
  };
};

export default useFirebase;
