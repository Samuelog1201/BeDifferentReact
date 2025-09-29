import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Routine, RoutineContextType, Exercise } from "../types/RoutineType";

const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const addRoutine = (routine: Routine) => {
    setRoutines((prev) => [routine, ...prev]);
  };

  const deleteRoutine = (id: number) => {
    setRoutines((prev) => prev.filter((r) => r.id !== id));
  };

  const addExercise = (routineId: number, exercise: Exercise) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.id === routineId
          ? { ...r, exercises: [exercise, ...r.exercises] }
          : r
      )
    );
  };

  const deleteExercise = (routineId: number, exerciseId: number) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.id === routineId
          ? { ...r, exercises: r.exercises.filter((e) => e.id !== exerciseId) }
          : r
      )
    );
  };

  return (
    <RoutineContext.Provider
      value={{ routines, addRoutine, deleteRoutine, addExercise, deleteExercise }}
    >
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutine = () => {
  const context = useContext(RoutineContext);
  return context;
};
