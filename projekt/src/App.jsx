import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Home from "./components/Home";
import TimeEntry from "./components/TimeEntry";
import VacationRequest from "./components/VacationRequest";
import DepartmentManager from "./components/DepartmentManager";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SignedIn>
            <Home />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
        <Route path="/time-entry">
          <SignedIn>
            <TimeEntry />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
        <Route path="/vacation-request">
          <SignedIn>
            <VacationRequest />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
        <Route path="/department-manager">
          <SignedIn>
            <DepartmentManager />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
