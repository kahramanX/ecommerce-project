import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("IZMIR")! as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </React.StrictMode>
);
