import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RoutineProvider } from "./context/RoutineContext";
import { GoalProvider } from "./context/GoalContext";
import { LogProvider } from "./context/LogContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutineProvider>
      <GoalProvider>
         <LogProvider>
           <App />
        </LogProvider>
      </GoalProvider>
    </RoutineProvider>
  </StrictMode>
);