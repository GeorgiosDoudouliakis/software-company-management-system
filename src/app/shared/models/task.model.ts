import {ProjectModel} from "@shared/models/project";

export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

export interface TaskModel {
  id: number;
  title: string;
  project: ProjectModel;
  estimation: string; // TODO type
  status: TaskStatus;
  dueDate: string; // TODO type
}
