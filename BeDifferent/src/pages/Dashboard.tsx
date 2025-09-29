import DashboardCard from "../components/DashboardCard";
import { useWorkout } from "../context/WorkoutContext";
import "./Dashboard.css";

const Dashboard = () => {
  const workoutContext = useWorkout();

  if (!workoutContext) {
    return <p>Error: WorkoutContext no está disponible</p>;
  }

  const { workouts } = workoutContext;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <DashboardCard title="Workouts" value={workouts.length} />
        <DashboardCard title="Minutos" value={120} />
        <DashboardCard title="Calorías" value={500} />
      </div>
    </div>
  );
};

export default Dashboard;
