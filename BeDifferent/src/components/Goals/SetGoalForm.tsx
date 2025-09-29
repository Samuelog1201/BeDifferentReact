import { useState } from "react";
import { useGoals } from "../../context/GoalContext";
import type { Goal } from "../../types/GoalType";
import "./SetGoalForm.css";

const SetGoalForm = () => {
  const { addGoal } = useGoals();

  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState(0);
  const [kg, setKg] = useState(0);
  const [sets, setSets] = useState(0);
  const [rpe, setRpe] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newGoal: Goal = {
      id: Date.now(),
      exercise,
      reps,
      sets,
      kg,
      rpe,
    };

    addGoal(newGoal);

    setExercise("");
    setReps(0);
    setKg(0);
    setSets(0);
    setRpe(0);
  };

  return (
    <form className="set-goal-form" onSubmit={handleSubmit}>
      <label>Exercise</label>
      <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
        <option value="">Select exercise</option>
        <option value="squat">Squat</option>
        <option value="deadlift">Deadlift</option>
        <option value="bench">Bench Press</option>
      </select>

      <div className="goal-row">
        <div className="goal-input">
          <label>Reps</label>
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
          />
        </div>

        <div className="goal-input">
          <label>Sets</label>
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
          />
        </div>

        <div className="goal-input">
          <label>Kg</label>
          <input
            type="number"
            placeholder="Kg"
            value={kg}
            onChange={(e) => setKg(Number(e.target.value))}
          />
        </div>

        <div className="goal-input">
          <label>RPE</label>
          <input
            type="number"
            placeholder="RPE"
            value={rpe}
            onChange={(e) => setRpe(Number(e.target.value))}
          />
        </div>
      </div>

      <button type="submit">Set Goal</button>
    </form>
  );
};

export default SetGoalForm;
