import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../CreateTaskForm/enums/Status';

export function emitCorrectBorderColor(status: TaskCounterStatusType) {
  switch (status) {
    case Status.completed: {
      return 'success.light';
    }
    case Status.inProgress: {
      return 'warning.light';
    }
    case Status.todo: {
      return 'error.light';
    }
    default: {
      return 'gray';
    }
  }
}
