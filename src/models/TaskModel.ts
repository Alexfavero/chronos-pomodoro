import type { TaskSateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // task concluida
  interruptDate: number | null; // task interrompida
  type: keyof TaskSateModel['config'];
};
