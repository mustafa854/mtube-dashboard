import { Link } from "react-router-dom";
import { getAllVideos } from "../utils/firebase.firestore/videos/getAllVideos";
import { useChannel } from "../context/channel";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { allViewCount } from "../utils/firebase.firestore/videos/allViewCount";
import Loader from "../components/Loader";

function Dashboard({ viewCount, commentCount }) {
  const { channel } = useChannel();

  if (viewCount) {
    return (
      <div className="h-full p-7" style={{ background: "#f9f9f9" }}>
        <h1 className="text-2xl font-semibold text-gray-800">
          Channel Dashboard
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
          <div
            className=" bg-white border rounded-md p-3"
            style={{ height: "500px" }}
          >
            <div className="border border-dashed h-full w-full flex flex-col gap-2 justify-center content-center">
              <img
                src="/image/svg/upload_video_illustration.svg"
                className="rounded-full"
                style={{ height: "150px" }}
                alt=""
              />
              <p className="text-sm mx-auto text-center w-10/12 text-slate-600">
                Want to see metrics on your recent video? Upload and publish a
                video to get started.
              </p>
              <button className="bg-blue-600 rounded-sm text-white font-semibold mx-auto p-2 px-4 mt-2 mb-8">
                <Link to="/upload-video">UPLOAD VIDEOS</Link>
              </button>
            </div>
          </div>
          <div className=" p-6 bg-white  border rounded-md h-fit">
            <div className="pb-10 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Channel Analytics
              </h2>
              <p className="text-xs mt-3">Current Subscribers</p>
              <h2 className="text-4xl mt-0.5 font-semibold">
                {channel.Subscribers}
              </h2>
            </div>
            <div className="pt-3 pb-7 ">
              <h2 className="text-sm font-semibold ">Summary</h2>
              <p className="text-xs mt-1">All Time</p>
              <div className="container mt-2 flex flex-row">
                <p className="text-sm">Views</p>
                <p className="text-sm ms-auto">{viewCount ? viewCount : 0}</p>
              </div>
              <div className="container mt-2 flex flex-row">
                <p className="text-sm">Comments</p>
                <p className="text-sm ms-auto">
                  {commentCount ? commentCount : 0}
                </p>
              </div>
            </div>
            {/* <div className="pt-3 pb-6">
            <h2 className="text-sm font-semibold ">Top videos</h2>
            <p className="text-xs mt-1">Last 48 hours · Views</p>
          </div> */}
            <div>
              <Link to="/content">
                <p className="text-blue-600 font-semibold">
                  GO TO CHANNEL ANALYTICS
                </p>
              </Link>
            </div>
          </div>
          {/* <div className="w-1/3 p-6 bg-white  border rounded-md h-fit flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Creator Insider
          </h2>
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/9bafec2de863a188e39aa7d72b64a3c7368f89bc9c0d0c38c67c9e4ff2d9e1b9_1280x720.jpeg"
            alt=""
          />
          <h2 className="text-md font-semibold text-gray-800">
            Latest YouTube Updates on Live Streaming Explained!
          </h2>
          <p className="text-sm text-slate-500">
            Hello Insiders! Today we are covering latest YouTube updates with
            Sarah, Global Creator Content Strategist about LiveStreaming.
          </p>
          <div>
            <p className="text-blue-600 mt-2 font-semibold">WATCH ON YOUTUBE</p>
          </div>
        </div> */}
        </div>
      </div>
    );
  } else {
    return <Loader height="" />;
  }
}

export default Dashboard;
