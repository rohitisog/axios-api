
const Logout = ({ user, setIsLoggedIn, setUser }) => {
  const handleLogout = () => {
    localStorage.clear();
    setUser({ email: "", password: "" });
    setIsLoggedIn(false);
    console.log("Logged out successfully!");
  };

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
