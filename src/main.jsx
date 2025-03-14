import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ui/ErrorFallback";
import App from "./App.jsx";

import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/dashboard")}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
