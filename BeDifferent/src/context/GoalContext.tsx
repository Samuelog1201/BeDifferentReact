import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";  
import type { Goal, GoalContextType } from "../types/GoalType";

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export const GoalProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (goal: Goal) => {
    setGoals((prev) => [goal, ...prev]);
  };

  const deleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <GoalContext.Provider value={{ goals, addGoal, deleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalProvider");
  }
  return context;
};
