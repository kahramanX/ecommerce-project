import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Routes from "components/Routes";

ReactDOM.createRoot(document.getElementById("IZMIR")! as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <Routes />
        </HelmetProvider>
    </React.StrictMode>
);
