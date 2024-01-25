import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";

export const getAllVideos = async () => {
  const user = auth.currentUser;
  if (user) {
    let output = [];
    const videosRef = collection(db, "videos");
    const q = query(videosRef, where("user_id", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((element) => output.push(element.data()));

    return output;
  }
};
