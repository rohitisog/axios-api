import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!username.trim()) {
      setError("Please enter a valid username");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setError("User not found");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input
        className="border p-2 rounded-md"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="ml-2 border-2 rounded-2xl p-2 px-5 bg-green-800 text-green-200"
        onClick={fetchUser}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch User"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {user && (
        <div className="mt-4">
          <h2>{user.name} (@{user.login})</h2>
          <img src={user.avatar_url} alt="Avatar" width={100} className="rounded-full" />
          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
          <p>Bio: {user.bio || "No bio available"}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Axios;
