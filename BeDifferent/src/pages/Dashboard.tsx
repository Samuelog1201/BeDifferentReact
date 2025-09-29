import DashboardCard from "../components/DashboardCard";
import { useRoutine } from "../context/RoutineContext";
import "./Dashboard.css";

const Dashboard = () => {
  const routineContext = useRoutine();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { routines } = routineContext;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <DashboardCard title="Routines" value={routines.length} />
        <DashboardCard title="Minutes" value={120} />
        <DashboardCard title="Calories" value={500} />
      </div>
    </div>
  );
};

export default Dashboard;
