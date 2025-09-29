import "./DashboardCard.css";

type Props = {
  title: string;
  value: string | number;
};

const DashboardCard = ({ title, value }: Props) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DashboardCard;