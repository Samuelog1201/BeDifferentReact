import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Log, LogContextType } from "../types/LogType";

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider = ({ children }: { children: ReactNode }) => {
  const [logs, setLogs] = useState<Log[]>([]);

  const logWorkout = (routineId: number, routineName: string) => {
    const newLog: Log = {
      id: Date.now(),
      routineId,
      routineName,
      createdAt: new Date().toLocaleDateString(),
    };
    setLogs((prev) => [newLog, ...prev]);
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
