import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside>
      <h2>Menu</h2>
      <ul>
        <li><button onClick={() => navigate("/")}>Home</button></li>
        <li><button onClick={() => navigate("/dashboard")}>Dashboard</button></li>
        <li><button onClick={() => navigate("/routines")}>Routines</button></li>
        <li><button onClick={() => navigate("/goals")}>Goals</button></li>
        <li><button onClick={() => navigate("/posts")}>Posts</button></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
