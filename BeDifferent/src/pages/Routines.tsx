import { useRoutine } from "../context/RoutineContext";
import FormRoutine from "../components/FormRoutine";
import RoutineCard from "../components/RoutineCard";
import "./Routines.css";

const Routines = () => {
  const routineContext = useRoutine();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { routines } = routineContext;

  return (
    <div className="routines-page">
      <h1>My Routines</h1>

      {routines.length === 0 ? (
        <p>No routines yet</p>
      ) : (
        <div className="routine-list">
          {routines.map((routine) => (
            <RoutineCard key={routine.id} routine={routine} />
          ))}
        </div>
      )}

      <div className="create-routine">
        <FormRoutine />
      </div>
    </div>
  );
};

export default Routines;
