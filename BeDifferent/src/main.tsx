import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RoutineProvider } from "./context/RoutineContext";
import { GoalProvider } from "./context/GoalContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutineProvider>
      <GoalProvider>
        <App />
      </GoalProvider>
    </RoutineProvider>
  </StrictMode>
);
