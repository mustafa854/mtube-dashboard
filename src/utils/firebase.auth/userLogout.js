import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const userLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User Signed Out");
      location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
};
