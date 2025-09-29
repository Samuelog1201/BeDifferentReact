export type Goal = {
  id: number;
  exercise: string;
  reps: number;
  sets: number;
  kg: number;
  rpe: number;
};

export type GoalContextType = {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  deleteGoal: (id: number) => void;
};
