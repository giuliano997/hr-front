import { useNavigate } from "react-router-dom";
import "./global.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="heading">Startseite</h2>
      <button onClick={() => navigate("/time")} className="button">
        Arbeitszeit
      </button>
      <button onClick={() => navigate("/leave")} className="button">
        Urlaub
      </button>
      <button onClick={() => navigate("/requests")} className="button">
        Anträge
      </button>
    </div>
  );
};

export default Home;
