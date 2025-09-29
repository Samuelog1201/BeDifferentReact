import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img src="https://i.imgur.com/5zftMCK.png" alt="BeDifferent Logo" />
      </div>

      {/* Main menu */}
      <nav className="sidebar-nav">
        <button onClick={() => navigate("/dashboard")} className="nav-item">
          <span className="icon">🏠</span> Dashboard
        </button>
        <button onClick={() => navigate("/log")} className="nav-item">
          <span className="icon">📝</span> Log Workout
        </button>
        <button onClick={() => navigate("/goals")} className="nav-item">
          <span className="icon">🎯</span> Goals
        </button>
        <button onClick={() => navigate("/routines")} className="nav-item">
          <span className="icon">📋</span> Routines
        </button>
      </nav>

      {/* Footer options */}
      <div className="sidebar-footer">
        <button onClick={() => navigate("/settings")} className="nav-item">
          ⚙️ Settings
        </button>
        <button onClick={() => navigate("/profile")} className="nav-item">
          👤 Profile
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
