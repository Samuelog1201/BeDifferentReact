import { useNavigate } from "react-router-dom";
import { useRoutine } from "../context/RoutineContext";
import type { Routine } from "../types/RoutineType";
import "./RoutineCard.css";

type Props = {
  routine: Routine;
};

const RoutineCard = ({ routine }: Props) => {
  const routineContext = useRoutine();
  const navigate = useNavigate();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { deleteRoutine } = routineContext;

  return (
    <div className="routine-card">
      <div className="routine-header">
        <h2>{routine.name}</h2>
        <button
          className="btn-delete"
          onClick={() => deleteRoutine(routine.id)}
        >
          ✕
        </button>
      </div>

      <div className="routine-actions">
        <button className="btn-action">Use</button>
        <button className="btn-action">Share</button>
        <button
          className="btn-action"
          onClick={() => navigate(`/routines/${routine.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default RoutineCard;
