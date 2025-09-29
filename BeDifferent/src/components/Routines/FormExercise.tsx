import { useState } from "react";
import { useRoutine } from "../../context/RoutineContext";
import type { Exercise } from "../../types/RoutineType";
import "./FormExercise.css";

type Props = {
  routineId: number;
};

const FormExercise = ({ routineId }: Props) => {
  const routineContext = useRoutine();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { addExercise } = routineContext;

  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExercise: Exercise = {
      id: Date.now(),
      name,
      sets,
      reps,
      weight,
    };

    addExercise(routineId, newExercise);

    setName("");
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  return (
    <form className="form-exercise" onSubmit={handleSubmit}>
      <h3>Add Exercise</h3>

      <div className="form-row">
        <label>Exercise:</label>
        <input
          type="text"
          placeholder="E.g. Squats"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Sets:</label>
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
        <label>Kg:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>

      <button type="submit" className="btn-add">Add Exercise</button>
    </form>
  );
};

export default FormExercise;
