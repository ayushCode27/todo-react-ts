import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../CreateTaskForm/enums/Status';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo: {
      return "Todo";
    }
    case Status.completed: {
      return 'completed';
    }
    case Status.inProgress: {
      return 'In Progress';
    }
    default:
      return '';
  }
};
