import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Auth({ location }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogin = location.pathname === "/login";

    try {
      const res = isLogin
        ? await axios.post("http://localhost:5000/api/auth/login", {
            username,
            password,
          })
        : await axios.post("http://localhost:5000/api/auth/register", {
            username,
            password,
          });

      localStorage.setItem("token", res.data.token);
      history.push("/");
    } catch (err) {
      alert("Error occurred");
    }
  };

  return (
    <div>
      <h2>{location.pathname === "/login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {location.pathname === "/login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Auth;
