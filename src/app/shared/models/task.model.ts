export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

export interface TaskModel {
  id: number;
  title: string;
  projectId: number;
  estimation: string; // TODO type
  status: TaskStatus;
  dueDate: string; // TODO type
}
