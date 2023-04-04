import "./page.scss";
import { useNavigate } from "react-router-dom";

const Back = ({ page, to = "" }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(to);
  };

  return (
    <div className="back-to-link" onClick={onClick}>
      Back to {page}
    </div>
  );
};

export default Back;
