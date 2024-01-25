// VideoProvider.jsx
import React, { useContext, useState } from "react";

export const ChannelContext = React.createContext({});

export const ChannelProvider = ({ children }) => {
  const [channel, setChannel] = useState({});

  return (
    <ChannelContext.Provider value={{ channel, setChannel }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = () => {
  return useContext(ChannelContext);
};
