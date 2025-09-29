import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <img src="https://i.imgur.com/5zftMCK.png" alt="BeDifferent logo" className="auth-logo" />
      <form className="auth-card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>

      <p className="or">Or</p>

      <div className="socials">
        <button onClick={() => navigate("/dashboard")}>
          <FaFacebook className="icon" /> Continue with Facebook
        </button>
        <button onClick={() => navigate("/dashboard")}>
          <FaGoogle className="icon" /> Continue with Google
        </button>
        <button onClick={() => navigate("/dashboard")}>
          <FaApple className="icon" /> Continue with Apple
        </button>
      </div>

      <p className="switch">
        Don’t have an account?{" "}
        <button onClick={() => navigate("/register")}>Sign up</button>
      </p>
    </div>
  );
};

export default Login;
