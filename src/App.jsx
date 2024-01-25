import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { auth } from "./config/firebase";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { getCurrentUserChannel } from "./utils/firebase.firestore/channel/getCurrentUserChannel";
import SideNav from "./components/sideNav";
import Content from "./pages/content";
import { VideoProvider, useVideo } from "./context/video";
import { getAllVideos } from "./utils/firebase.firestore/videos/getAllVideos";
import { createVideo } from "./utils/firebase.firestore/videos/createVideo";
import CreateVideo from "./pages/createVideo";
import { useChannel } from "./context/channel";
import UpdateVideo from "./pages/updateVideo";
import { allViewCount } from "./utils/firebase.firestore/videos/allViewCount";
import { getCommentCount } from "./utils/firebase.firestore/getCommentCount";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [viewCount, setViewCount] = useState(undefined);
  const [commentCount, setCommentCount] = useState(undefined);
  const [userDetails, setUserDetails] = useState({
    profilePhoto: "/image/img/profile.jpeg",
  });
  const { channel, setChannel } = useChannel();
  const fetchViewCount = async () => {
    const response = await allViewCount();

    setViewCount(response);
  };
  const fetchCommentCount = async () => {
    const response = await getCommentCount(channel.videos);
    setCommentCount(response);
  };
  const fetchCurrentUserChannel = async () => {
    const response = await getCurrentUserChannel();
    setChannel({
      Subscribers: response.Subscribers,
      channelAbout: response.channelAbout,
      channelCover: response.channelCover,
      channelImage: response.channelImage,
      channelName: response.channelName,
      channelsId: response.channelsId,
      createdAt: response.createdAt,
      user_id: response.user_id,
      videos: response.videos,
    });
  };
  const { videos, setVideos } = useVideo();
  useEffect(() => {
    fetchCommentCount();
  }, [channel]);
  const fetchAllVideos = async () => {
    try {
      const response = await getAllVideos();

      setVideos(response);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails({
          name: user.displayName,
          email: user.email,
          profilePhoto: user.photoURL,
          uid: user.uid,
        });
        setLoggedIn(true);
        fetchCurrentUserChannel();
        fetchAllVideos();
        fetchViewCount();
      } else {
        // User is signed out
        setUserDetails({
          profilePhoto: "/image/img/profile.jpeg",
        });
      }
    });

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  return (
    <>
      <div className="container flex flex-col h-screen max-h-screen overflow-auto">
        <Router>
          <Header userDetails={userDetails} />
          {loggedIn ? (
            <div className="container flex flex-row grow">
              <div className="container w-1/5 border-r">
                <SideNav channel={channel} userDetails={userDetails} />
              </div>
              <div className="container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Dashboard
                        viewCount={viewCount}
                        commentCount={commentCount}
                      />
                    }
                  />
                  <Route path="/content" element={<Content />} />
                  <Route path="/upload-video" element={<CreateVideo />} />
                  <Route path="/update-video/:id" element={<UpdateVideo />} />
                </Routes>
              </div>
            </div>
          ) : (
            <div className="container w-full my-auto flex flex-row justify-center content-center">
              <h1 className="text-3xl font-bold">Please Login</h1>
            </div>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
