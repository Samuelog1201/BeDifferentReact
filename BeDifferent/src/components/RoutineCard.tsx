import { useNavigate } from "react-router-dom";
import { useRoutine } from "../context/RoutineContext";
import { useLogs } from "../context/LogContext";
import type { Routine } from "../types/RoutineType";
import "./RoutineCard.css";


type Props = {
  routine: Routine;
};

const RoutineCard = ({ routine }: Props) => {
  const routineContext = useRoutine();
  const logContext = useLogs();

  if (!routineContext || !logContext) {
    return <p>Error: Context not available</p>;
  }

  const { deleteRoutine } = routineContext;
  const { logWorkout } = logContext;
  const navigate = useNavigate();

  return (
    <div className="routine-card">
      <div className="routine-header">
        <h2>{routine.name}</h2>
        <button className="btn-delete" onClick={() => deleteRoutine(routine.id)}>
          ✕
        </button>
      </div>

      <div className="routine-actions">
        <button className="btn-action" onClick={() => logWorkout(routine.id, routine.name)}>
          Use
        </button>
        <button className="btn-action">Share</button>
        <button className="btn-action" onClick={() => navigate(`/routines/${routine.id}`)}>
        Edit
        </button>
      </div>
    </div>
  );
};

export default RoutineCard;
