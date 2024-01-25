import {
  arrayUnion,
  collection,
  getDoc,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { runTransaction, doc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../../config/firebase";

export const updateVideo = async (
  videoTitle,
  videoDescription,
  videoLink,
  videoThumbnail,
  videosId
) => {
  const user = auth.currentUser;
  if (user) {
    console.log("sjnsdjansdjasndjsndj");
    const videosCollectionRef = doc(db, "videos", videosId);
    await updateDoc(videosCollectionRef, {
      videoThumbnail: videoThumbnail,
      videoLink: videoLink,
      title: videoTitle,
      description: videoDescription,
    });
  } else {
    console.error("Please Login First");
  }
};
