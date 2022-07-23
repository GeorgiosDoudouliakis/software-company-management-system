export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

export interface Task {
  id: number;
  title: string;
  estimation: string; // TODO type
  status: TaskStatus;
  dueDate: string; // TODO type
}
