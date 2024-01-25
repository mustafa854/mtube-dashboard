import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VideoProvider } from "./context/video.jsx";
import { ChannelProvider } from "./context/channel.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoProvider>
      <ChannelProvider>
        <App />
      </ChannelProvider>
    </VideoProvider>
  </React.StrictMode>
);
