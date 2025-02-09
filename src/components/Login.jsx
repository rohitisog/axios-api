import React, { useState, useEffect } from "react";

// Login Component
 const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setLocalEmail] = useState("");
  const [password, setLocalPassword] = useState("");

  const handleLogin = () => {
    const userInfo = { email, password };
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // ✅ Save email & password
    setUser(userInfo);
    setIsLoggedIn(true);
    console.log("Logged in successfully!", userInfo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setLocalEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setLocalPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;