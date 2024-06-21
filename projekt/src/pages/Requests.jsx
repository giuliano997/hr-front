import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";

const Requests = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Anträge</h2>
      <ButtonLink to="/home">Zurück zur Startseite</ButtonLink>
    </div>
  );
};

export default Requests;
