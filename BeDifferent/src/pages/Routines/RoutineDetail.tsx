import { useParams } from "react-router-dom";
import { useRoutine } from "../../context/RoutineContext";
import FormExercise from "../../components/Routines/FormExercise";
import "./RoutineDetail.css";

const RoutineDetail = () => {
  const { id } = useParams();
  const routineId = Number(id);

  const routineContext = useRoutine();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { routines, deleteExercise } = routineContext;

  const routine = routines.find((r) => r.id === routineId);

  if (!routine) {
    return <p>Routine not found</p>;
  }

  return (
    <div className="routine-detail">
      {/* lado izquierdo: form */}
      <div className="routine-form">
        <h2>Add Exercises</h2>
        <FormExercise routineId={routine.id} />
      </div>

      {/* lado derecho: routine summary */}
      <div className="routine-summary">
        <div className="routine-card">
          <div className="routine-header">
            <h3>{routine.name}</h3>
            {routine.createdAt && (
              <span className="routine-date">{routine.createdAt}</span>
            )}
          </div>

          <table>
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Kg</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {routine.exercises.length === 0 ? (
                <tr>
                  <td colSpan={5}>No exercises yet</td>
                </tr>
              ) : (
                routine.exercises.map((ex) => (
                  <tr key={ex.id}>
                    <td>{ex.name}</td>
                    <td>{ex.sets}</td>
                    <td>{ex.reps}</td>
                    <td>{ex.weight}</td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => deleteExercise(routine.id, ex.id)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoutineDetail;
