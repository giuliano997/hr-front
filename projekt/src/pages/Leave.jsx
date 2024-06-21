import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";

const Leave = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Urlaubstage</h2>
      <ButtonLink to="/home">Zurück zur Startseite</ButtonLink>
    </div>
  );
};

export default Leave;
