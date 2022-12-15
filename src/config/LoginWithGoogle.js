import { auth } from "./fbConfig";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "reduxStore/user";

import styles from "./LoginWithGoogle.module.scss";

export default function LoginWithGoogle() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Sign In with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
      dispatch(userLogin());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className={styles.block}>
      <h1>Sign In with Google</h1>
      <button className={styles.button} onClick={GoogleLogin}>
        Google
      </button>
    </div>
  );
}
