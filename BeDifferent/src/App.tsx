import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>

        <Sidebar />

        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
