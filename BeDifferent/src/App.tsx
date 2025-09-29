import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Routines from "./pages/Routines";
import Goals from "./pages/Goals";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LogWorkouts from "./pages/LogWorkouts";
import RoutineDetail from "./pages/RoutineDetail"; 

const Layout = () => {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div style={{ display: "flex" }}>
      {!hideSidebar && <Sidebar />}
      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/routines/:id" element={<RoutineDetail />} /> 
          <Route path="/logs" element={<LogWorkouts />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
