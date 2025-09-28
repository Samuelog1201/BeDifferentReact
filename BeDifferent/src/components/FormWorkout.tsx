import { useState } from "react";
import { useWorkout } from "../context/WorkoutContext";
import type { Workout } from "../types/WorkoutType";
import "./FormWorkout.css"; 

const FormWorkout = () => {
  const workoutContext = useWorkout();

  if (!workoutContext) {
    return <p>Error: WorkoutContext no está disponible</p>;
  }

  const { addWorkout } = workoutContext;

  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newWorkout: Workout = {
      id: Date.now(),
      name,
      sets,
      reps,
      weight,
    };

    addWorkout(newWorkout);

    setName("");
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  return (
    <form className="form-workout" onSubmit={handleSubmit}>
      <h2>Agregar Workout</h2>

      <div className="form-row">
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Ej: Sentadillas"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Series:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
        />
      </div>

      <div className="form-row">
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
      </div>

      <div className="form-row">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>

      <button type="submit" className="btn-add">Agregar</button>
    </form>
  );
};

export default FormWorkout;
