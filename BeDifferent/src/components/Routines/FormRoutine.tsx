import { useState } from "react";
import { useRoutine } from "../../context/RoutineContext";
import type { Routine } from "../../types/RoutineType";
import "./FormRoutine.css";

const FormRoutine = () => {
  const routineContext = useRoutine();

  if (!routineContext) {
    return <p>Error: RoutineContext not available</p>;
  }

  const { addRoutine } = routineContext;

  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRoutine: Routine = {
      id: Date.now(),
      name,
      exercises: [],
      createdAt: new Date().toLocaleDateString(), 
    };

    addRoutine(newRoutine);
    setName("");
  };

  return (
    <form className="form-routine" onSubmit={handleSubmit}>
      <h2>Create Routine</h2>
      <input
        type="text"
        placeholder="E.g. Leg Day"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Routine</button>
    </form>
  );
};

export default FormRoutine;
