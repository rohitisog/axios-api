import React, { useState, useEffect } from "react";

const LoginStorage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load stored data when component mounts
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      const { email, password } = JSON.parse(savedUserInfo);
      setEmail(email);
      setPassword(password);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const userInfo = { email, password };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setIsLoggedIn(true);
    console.log("Logged in successfully!");
  };

  const handleLogout = () => {
    localStorage.clear();
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
    console.log("Logged out successfully!");
  };

  return (
    <>
      <div>
        {!isLoggedIn ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </>
        ) : (
          <>
            <h2>Welcome, {email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </>
  );
};

export default LoginStorage;
