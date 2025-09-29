export type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export type Routine = {
  id: number;
  name: string;         // nombre de la rutina
  exercises: Exercise[]; // lista de ejercicios dentro de la rutina
};

export type RoutineContextType = {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  deleteRoutine: (id: number) => void;
  addExercise: (routineId: number, exercise: Exercise) => void;
  deleteExercise: (routineId: number, exerciseId: number) => void;
};
