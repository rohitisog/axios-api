import React from "react";
import Axios from "./components/Axios";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton ";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="">
      <Axios />
      <Profile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default App;
