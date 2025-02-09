import React, { useState, useEffect } from "react";

// Default User Credentials
const DEFAULT_USER = {
  email: "User 1",
  password: "123456",
};

const Single = () => {
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

  const handleLogin = (email, password) => {
    // ✅ Use default user if fields are empty
    const userInfo =
      email.trim() === "" || password.trim() === ""
        ? DEFAULT_USER
        : { email, password };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(userInfo);
    setIsLoggedIn(true);
    console.log("Logged in successfully!", userInfo);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser({ email: "", password: "" });
    setIsLoggedIn(false);
    console.log("Logged out successfully!");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <button
            onClick={() =>
              handleLogin(
                document.getElementById("email").value,
                document.getElementById("password").value
              )
            }
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Single;
