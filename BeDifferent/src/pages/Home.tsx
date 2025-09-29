import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
        <img src="https://i.imgur.com/5zftMCK.png" alt="BeDifferent Logo" />
        <p className="tagline">
        BeDifferent is your space to challenge yourself, track your workouts, and achieve goals that once felt impossible. Make every day count
        </p>

      <div className="home-actions">
        <button className="btn-primary" onClick={() => navigate("/login")}>
          Iniciar Sesión
        </button>
        <button className="btn-secondary" onClick={() => navigate("/register")}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Home;
