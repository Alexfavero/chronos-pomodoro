import { createContext } from 'react';
import type { TaskSateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskSate';

type TaskContextProps = {
  state: TaskSateModel;
  setState: React.Dispatch<React.SetStateAction<TaskSateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
