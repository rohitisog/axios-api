import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton ";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="">
      <Profile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default App;
