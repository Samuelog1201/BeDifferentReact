import { useGoals } from "../context/GoalContext";
import GoalCard from "../components/GoalCard";
import ProcessCard from "../components/ProcessCard";
import SetGoalForm from "../components/SetGoalForm";
import "./Goals.css";

const Goals = () => {
  const { goals, deleteGoal } = useGoals();

  return (
    <div className="goals-page">
      <h1>Goals</h1>

      <div className="goals-content">
        <div className="goals-left">
          <h2>Achieved Goals</h2>
          {goals.length === 0 ? (
            <p>No goals yet</p>
          ) : (
            goals.map((goal) => (
              <div key={goal.id}>
                <GoalCard
                  title={`${goal.exercise} ${goal.kg} Kg`}
                  reps={`${goal.reps} Reps | ${goal.sets} Sets | RPE ${goal.rpe}`}
                  progress={50}
                />
                <button className="btn-delete-goal" onClick={() => deleteGoal(goal.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
          <SetGoalForm />
        </div>

        <div className="goals-right">
          <h2>Process</h2>
          <ProcessCard title="Progress Tracking" subtitle="Charts coming soon..." />
        </div>
      </div>
    </div>
  );
};

export default Goals;
