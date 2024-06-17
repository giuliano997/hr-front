import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/time-entry">Arbeitszeit eintragen</Link>
          </li>
          <li>
            <Link to="/vacation-request">Urlaub beantragen</Link>
          </li>
          {user.publicMetadata.role === "manager" && (
            <li>
              <Link to="/department-manager">Urlaubsanträge verwalten</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
