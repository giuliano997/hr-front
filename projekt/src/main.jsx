import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
