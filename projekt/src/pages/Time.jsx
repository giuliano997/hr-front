import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";

const Time = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Arbeitszeit</h2>
      <ButtonLink to="/home">Zurück zur Startseite</ButtonLink>
    </div>
  );
};

export default Time;
