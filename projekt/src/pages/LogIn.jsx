import { useNavigate } from "react-router-dom";
import "./global.css";

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <h2 className="heading">Log In</h2>
      <button onClick={handleLogIn} className="button">
        Log In
      </button>
    </div>
  );
};

export default LogIn;
