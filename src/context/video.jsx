// VideoProvider.jsx
import React, { useContext, useState } from "react";

export const VideoContext = React.createContext({});

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(undefined);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
