import { useWorkout } from "../context/WorkoutContext";
import FormWorkout from "../components/FormWorkout";
import "./Workouts.css";

const Workouts = () => {
  const workoutContext = useWorkout();

  if (!workoutContext) {
    return <p>Error: WorkoutContext no está disponible</p>;
  }

  const { workouts } = workoutContext;

  return (
    <div className="workouts-page">
      <h1>Workouts</h1>
      <FormWorkout />

      {workouts.length === 0 ? (
        <p className="no-workouts">No hay entrenamientos aún</p>
      ) : (
        <ul className="workout-list">
          {workouts.map((w) => (
            <li key={w.id} className="workout-item">
              <span className="workout-name">{w.name}</span>
              <span>{w.sets} series</span>
              <span>{w.reps} reps</span>
              <span>{w.weight} kg</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Workouts;
