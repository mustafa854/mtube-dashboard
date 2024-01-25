import { Link } from "react-router-dom";
import { useChannel } from "../context/channel";
import { auth } from "../config/firebase";
import { userLogout } from "../utils/firebase.auth/userLogout";

function SideNav(currentChannel, userDetails) {
  const { channel } = useChannel();
  const signOut = async () => {
    userLogout();
  };

  return (
    <div className=" flex flex-col h-full justify-between content-between">
      <div>
        <div className=" flex flex-col py-6 justify-center content-evenly border-b">
          <div>
            <img
              src={channel.channelImage}
              alt=""
              style={{ width: "40%" }}
              className="mx-auto rounded-full"
            />
            <div className="flex flex-col gap-0.5 pt-4">
              <h2 className="mx-auto text-sm font-semibold text-gray-800	">
                Your Channel
              </h2>
              <p className="mx-auto text-xs text-gray-600	">
                {channel.channelName}
              </p>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <Link to="/">
            <div className=" sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3">
              <div className="icon mr-6">
                <img
                  src="/image/svg/dashboard.svg"
                  style={{ height: "30px" }}
                  alt=""
                />
              </div>
              <div className="content my-auto">
                <p className="mx-auto text-sm font-semibold text-gray-500">
                  Dashboard
                </p>
              </div>
            </div>
          </Link>
          <Link to="/content">
            <div className=" sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3">
              <div className="icon mr-6">
                <img
                  src="/image/svg/video.svg"
                  style={{ height: "25px" }}
                  alt=""
                />
              </div>
              <div className="content my-auto">
                <p className="mx-auto text-sm font-semibold text-gray-500">
                  Content
                </p>
              </div>
            </div>
          </Link>
          <Link to="/upload-video">
            <div className=" sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3">
              <div className="icon mr-6">
                <img
                  src="/image/svg/analytics.svg"
                  style={{ height: "25px" }}
                  alt=""
                />
              </div>
              <div className="content my-auto">
                <p className="mx-auto text-sm font-semibold text-gray-500">
                  Upload Video
                </p>
              </div>
            </div>
          </Link>
          {/* <div className=" sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3">
            <div className="icon mr-6">
              <img
                src="/image/svg/comment.svg"
                style={{ height: "25px" }}
                alt=""
              />
            </div>
            <div className="content my-auto">
              <p className="mx-auto text-sm font-semibold text-gray-500">
                Comments
              </p>
            </div>
          </div> */}
          {/* <div className=" sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3">
            <div className="icon mr-6">
              <img
                src="/image/svg/settings.svg"
                style={{ height: "25px" }}
                alt=""
              />
            </div>
            <div className="content my-auto">
              <p className="mx-auto text-sm font-semibold text-gray-500">
                Settings
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="border-t">
        <div
          className="container sideNav-btn  flex flex-row pl-6 cursor-pointer background-f9f9f9 py-3"
          onClick={signOut}
        >
          <div className="icon mr-6">
            <img
              src="/image/svg/logout.svg"
              style={{ height: "25px" }}
              alt=""
            />
          </div>
          <div className="content my-auto">
            <p className="mx-auto text-sm font-semibold text-gray-500">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
