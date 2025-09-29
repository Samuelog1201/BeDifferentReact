import "./GoalCard.css";

type GoalCardProps = {
  title: string;
  reps: string;
  progress: number;
};

const GoalCard = ({ title, reps, progress }: GoalCardProps) => {
  return (
    <div className="goal-card">
      <h3>{title}</h3>
      <p>{reps}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default GoalCard;
