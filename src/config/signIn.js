import { auth } from "./fbConfig";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "reduxStore/user";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Sign In with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
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
    <div>
      <h3>Sign In with Google</h3>
      <button onClick={GoogleLogin}>Google</button>
    </div>
  );
}
