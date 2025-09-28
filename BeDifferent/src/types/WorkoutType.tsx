export type Workout = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export type WorkoutContextType = {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
};
