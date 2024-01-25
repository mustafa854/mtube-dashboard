import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../config/firebase";

export const getVideo = async (videosId) => {
  const videosRef = doc(db, "videos", videosId);
  const response = await getDoc(videosRef);
  console.log("andar hu mein");
  return response.data();
};
