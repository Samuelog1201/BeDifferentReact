import "./ProcessCard.css";

type ProcessCardProps = {
  title: string;
  subtitle: string;
};

const ProcessCard = ({ title, subtitle }: ProcessCardProps) => {
  return (
    <div className="process-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className="process-placeholder">
        <span>Graph</span>
      </div>
    </div>
  );
};

export default ProcessCard;
