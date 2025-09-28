import { useWorkout } from "../context/WorkoutContext";
import FormWorkout from "../components/FormWorkout";

const Workouts = () => {
  const workoutContext = useWorkout();

  if (!workoutContext) {
    return <p>Error: WorkoutContext no está disponible</p>;
  }

  const { workouts } = workoutContext;

  return (
    <div>
      <h1>Workouts</h1>
      <FormWorkout />

      {workouts.length === 0 ? (
        <p>No hay entrenamientos aún</p>
      ) : (
        <ul>
          {workouts.map((w) => (
            <li key={w.id}>
              {w.name} - {w.sets}x{w.reps} @ {w.weight}kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Workouts;
