import { addDoc, collection } from "@firebase/firestore";
import { store } from "reduxStore";
import { auth, db } from "./fbConfig";

export function getUserName() {
  return auth.currentUser.uid;
}

export const isUserLogged = () => (store.getState().user.userId ? true : false);

export const setDataFirebase = async (data) => {
  await addDoc(collection(db, "links"), data);
};
