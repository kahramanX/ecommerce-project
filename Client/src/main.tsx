import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { HelmetProvider } from "react-helmet-async";
import Routes from "components/Routes";
import Modal from "react-modal";

// Styles
import "assets/index.scss";

Modal.setAppElement("#SMYRNA");

ReactDOM.createRoot(document.getElementById("SMYRNA")! as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <Routes />
        </HelmetProvider>
    </React.StrictMode>
);
