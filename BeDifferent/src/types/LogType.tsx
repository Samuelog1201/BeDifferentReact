export type Log = {
  id: number;
  routineId: number;
  routineName: string;
  createdAt: string;
};

export type LogContextType = {
  logs: Log[];
  logWorkout: (routineId: number, routineName: string) => void;
  deleteLog: (id: number) => void;
};
