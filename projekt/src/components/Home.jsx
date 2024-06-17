import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <LoginForm />
      ) : (
        <div>
          <h1>Welcome, {user.name}</h1>
          <nav>
            <ul>
              <li>
                <Link to="/time-entry">Arbeitszeit eintragen</Link>
              </li>
              <li>
                <Link to="/vacation-request">Urlaub beantragen</Link>
              </li>
              {user.role === "manager" && (
                <li>
                  <Link to="/department-manager">Urlaubsanträge verwalten</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Home;
