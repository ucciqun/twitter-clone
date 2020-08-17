import React, { useState, createContext } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

export const User = createContext();
function App() {
  const [account, setAccount] = useState({
    displayName: "きゅん",
    username: "@xxUCQxx",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg"
  });
  return (
    <div className="app">
      <User.Provider value={[account, setAccount]}>
        <Sidebar />
        <Feed />
      </User.Provider>
      <Widgets />
    </div>
  );
}

export default App;
