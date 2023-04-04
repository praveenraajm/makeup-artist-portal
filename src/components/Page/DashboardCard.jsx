import { useNavigate } from "react-router-dom";

const DashboardCard = ({ children, account }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/account/${account.id}`);
  };

  return (
    <div className="dashboard-card" onClick={onClick}>
      <div className="dashboard-card-group">
        {account.group} - {account.code}
      </div>
      {/* <div className="dashboard-card-code">{account.code}</div> */}
    </div>
  );
};

export default DashboardCard;
