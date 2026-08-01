import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home";
import Security from "./Security";
import "./styles.css";

const security = window.location.pathname.startsWith("/portal/security");

document.title = security
  ? "Security — Portal"
  : "Portal — Give your Mac a portal";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{security ? <Security /> : <Home />}</React.StrictMode>,
);
