import { useRoutine } from "../context/RoutineContext";
import type { Routine } from "../types/RoutineType";
import "./RoutineCard.css";

type Props = {
  routine: Routine;
};

const RoutineCard = ({ routine }: Props) => {
  const routineContext = useRoutine();

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
        <button className="btn-action">Edit</button>
      </div>
    </div>
  );
};

export default RoutineCard;
