/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { Log } from "../types/LogType";

type LogContextType = {
  logs: Log[];
  logWorkout: (routineId: number, routineName: string) => void;
  deleteLog: (id: number) => void; 
};

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider = ({ children }: { children: React.ReactNode }) => {
  const [logs, setLogs] = useState<Log[]>([]);

  const logWorkout = (routineId: number, routineName: string) => {
    const newLog: Log = {
      id: Date.now(),
      routineId,
      routineName,
      date: new Date().toLocaleDateString(),
    };
    setLogs((prev) => [...prev, newLog]);
  };

  const deleteLog = (id: number) => {
    setLogs((prev) => prev.filter((log) => log.id !== id));
  };

  return (
    <LogContext.Provider value={{ logs, logWorkout, deleteLog }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogs = () => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error("useLogs must be used within a LogProvider");
  }
  return context;
};
