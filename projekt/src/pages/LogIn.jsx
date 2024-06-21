import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2>Log In</h2>
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default LogIn;
