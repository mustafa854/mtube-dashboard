import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getCommentCount = async (videos) => {
  let output = 0;
  let i = 0;
  const docRef = collection(db, "comments");
  if (videos) {
    while (i < videos.length) {
      const q = query(docRef, where("videoId", "==", videos[i]));
      const querySnapshot = await getDocs(q);
      output = output + querySnapshot.size;
      i++;
    }
  }
  return output;
};
