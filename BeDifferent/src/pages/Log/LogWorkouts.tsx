import { useLogs } from "../../context/LogContext";
import { useNavigate } from "react-router-dom";
import "./LogWorkouts.css";

const LogWorkouts = () => {
  const { logs, deleteLog } = useLogs();
  const navigate = useNavigate();

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

              <div className="log-actions">
                <button onClick={() => navigate(`/routines/${log.routineId}`)}>
                  View
                </button>
                <button onClick={() => deleteLog(log.id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogWorkouts;
