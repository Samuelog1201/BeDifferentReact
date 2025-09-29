import DashboardCard from "../../components/Dashboard/DashboardCard";
import { useRoutine } from "../../context/RoutineContext";
import { useGoals } from "../../context/GoalContext";
import { useLogs } from "../../context/LogContext";
import "./Dashboard.css";

const Dashboard = () => {
  const routineContext = useRoutine();
  const goalContext = useGoals();
  const logContext = useLogs();

  if (!routineContext || !goalContext || !logContext) {
    return <p>Error: Context not available</p>;
  }

  const { routines } = routineContext;
  const { goals } = goalContext;
  const { logs } = logContext;

  // último log registrado
  const lastLog = logs.length > 0 ? logs[logs.length - 1] : null;

  // últimas 3 rutinas creadas
  const latestRoutines = [...routines]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <DashboardCard title="Routines" value={routines.length} />
        <DashboardCard title="Goals" value={goals.length} />
        <DashboardCard
          title="Last Log"
          value={
            lastLog
              ? `${lastLog.routineName} (${lastLog.date})`
              : "No logs yet"
          }
        />
      </div>

      <div className="latest-routines">
        <h2>Latest Routines</h2>
        {latestRoutines.length === 0 ? (
          <p>No routines yet</p>
        ) : (
          <div className="routine-preview-list">
            {latestRoutines.map((routine) => (
              <div key={routine.id} className="routine-preview">
                <h3>{routine.name}</h3>
                <p className="routine-date">
                  Created: {routine.createdAt}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
