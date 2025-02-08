import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton ";
import Profile from "./components/Profile";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-screen">

          <ThemeToggleButton />
        </div>
        <Profile />

        <LoginButton />
        <LogoutButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
