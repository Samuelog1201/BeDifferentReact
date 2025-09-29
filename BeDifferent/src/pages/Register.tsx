import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard"); 
  };

  return (
    <div className="auth-container">
      <img src="https://i.imgur.com/LGMqr68.png" alt="BeDifferent logo" className="auth-logo" />
      <form className="auth-card" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="date" name="birthday" onChange={handleChange} />
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
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Log in</button>
      </p>
    </div>
  );
};

export default Register;
