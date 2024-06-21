import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Startseite</h2>
      <button onClick={() => navigate("/time")}>Arbeitszeit</button>
      <button onClick={() => navigate("/leave")}>Urlaub</button>
      <button onClick={() => navigate("/requests")}>Anträge</button>
    </div>
  );
};

export default Home;
