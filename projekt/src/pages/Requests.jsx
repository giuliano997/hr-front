import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import "./global.css";

const Requests = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="heading">Anträge</h2>
      <ButtonLink to="/home" className="button-link">
        Zurück zur Startseite
      </ButtonLink>
    </div>
  );
};

export default Requests;
