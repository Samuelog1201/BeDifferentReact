import { useLogs } from "../../context/LogContext";
import "./LogWorkouts.css";

const LogWorkouts = () => {
  const { logs, deleteLog } = useLogs();

  return (
    <div className="log-page">
      <h1>Workout Log</h1>

      {logs.length === 0 ? (
        <p>No workouts logged yet</p>
      ) : (
        <ul className="log-list">
          {logs.map((log) => (
            <li key={log.id} className="log-item">
              <div>
                <h3>{log.routineName}</h3>
                <p>{log.date}</p>
              </div>
              <button onClick={() => deleteLog(log.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogWorkouts;
