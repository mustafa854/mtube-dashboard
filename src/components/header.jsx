// import { Link } from "react-router-dom";
// import SearchForm from "./search/searchForm.jsx";
import { userLogout } from "../utils/firebase.auth/userLogout.js";
import { auth } from "../config/firebase.js";
import { useEffect, useState } from "react";
import { userLogin } from "../utils/firebase.auth/userLogin.js";
import { Link } from "react-router-dom";

function Header({ userDetails }) {
  const [myChannelLink, setMyChannelLink] = useState("");
  const signIn = async () => {
    await userLogin();
  };

  const signOut = async () => {
    userLogout();
  };

  return (
    <>
      <div className="w-full mx-auto p-4 flex flex-row justify-between	items-center shadow-md z-50		">
        <div className="flex flex-row gap-x-4 mr-auto">
          <div>
            <img className="header-icon" src="image/svg/hamburger.svg" alt="" />
          </div>
          <div>
            {/* <Link to={"/"}> */}
            <img
              className="header-icon--logo"
              src="image/svg/yt_studio_logo.svg"
              alt=""
            />
            {/* </Link> */}
          </div>
        </div>
        <div className="">{/* <SearchForm /> */}</div>

        <div className="">
          {auth.currentUser ? (
            <>
              <div className="container flex flex-row gap-4">
                <Link to="/upload-video">
                  <button className="flex flex-row border rounded-sm px-4 py-1 font-semibold">
                    <img
                      src="/image/svg/create_video.svg"
                      alt=""
                      className="my-auto mr-1 "
                      style={{ width: "20px" }}
                      srcSet=""
                    />
                    Upload
                  </button>
                </Link>
                <img
                  src={userDetails.profilePhoto}
                  alt=""
                  className="mx-3 my-auto"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "500px",
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="flex flex-row hover:bg-sky-100 hover:border-sky-100 justify-center	items-center text-sky-600 p-2 border border-slate-200 rounded-full pt-0 pb-1"
                onClick={signIn}
              >
                <img
                  src="/assets/profile.svg"
                  className="header-icon pt-1 pr-2 fill-current text-sky-600"
                  alt=""
                />
                Signin
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
