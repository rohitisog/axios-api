import { useState,useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";

const LoginStorage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load stored data when component mounts
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      const parsedUser = JSON.parse(savedUserInfo);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Logout user={user} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      )}
    </>
  );
};

export default LoginStorage;
