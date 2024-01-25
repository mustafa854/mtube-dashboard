import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../config/firebase";

export const getCurrentUserChannel = async () => {
  const user = auth.currentUser;
  let output = [];
  if (user) {
    const channelsDocRef = query(
      collection(db, "channels"),
      where("user_id", "==", user.uid)
    );
    const channelDoc = await getDocs(channelsDocRef);
    channelDoc.forEach((element) => {
      output.push(element.data());
    });
  }
  return output[0];
};
