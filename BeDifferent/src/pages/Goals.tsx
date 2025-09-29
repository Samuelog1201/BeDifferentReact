import GoalCard from "../components/GoalCard";
import ProcessCard from "../components/ProcessCard";
import SetGoalForm from "../components/SetGoalForm";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="goals-page">
      <h1>Goals</h1>

      <div className="goals-content">
        <div className="goals-left">
          <h2>Achieved Goals</h2>
          <GoalCard title="Squat 180 Kg" reps="1 Rep" progress={60} />
          <GoalCard title="Deadlift 200 Kg" reps="1 Rep" progress={70} />
          <SetGoalForm />
        </div>

        <div className="goals-right">
          <h2>Process</h2>
          <ProcessCard title="Deadlift 200 Kg" subtitle="1 RM | RPE 8" />
          <ProcessCard title="Squat 180 Kg" subtitle="1 RM | RPE 8" />
          <ProcessCard title="Weekly Volume" subtitle="36 sets" />
        </div>
      </div>
    </div>
  );
};

export default Goals;
