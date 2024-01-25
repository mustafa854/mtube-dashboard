import { auth, provider } from "../../config/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const userLogin = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      // console.log(user);
      // console.log(token);
      // const docRef = doc(db, "userMeta", user.uid);

      // // Set the document's data
      // return setDoc(
      //   docRef,
      //   {
      //     // Add any additional user information you want to store here
      //     email: user.email,
      //     userMetaId: docRef.id,
      //     user_uid: user.uid,
      //   },
      //   { merge: true }
      // );
    })
    .then((result) => location.reload())
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
