import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Workout, WorkoutContextType } from "../types/WorkoutType";

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = (workout: Workout) => {
    setWorkouts((prev) => [workout, ...prev]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Hook para usar el contexto en los componentes
export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  return context;
};
