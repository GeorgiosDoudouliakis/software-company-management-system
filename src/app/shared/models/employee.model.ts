import {ProjectModel} from "./project";
import {TaskModel} from "./task";

export type EmployeeRole = 'front-end-developer' | 'back-end-developer' | 'full-stack-developer' | 'qa' | 'support-engineer';

export interface EmployeeModel {
  id: number;
  firstName: string;
  lastName: string;
  image: string; // TODO type
  birthdate: string; // TODO type
  gender: 'male' | 'female';
  role: EmployeeRole;
  projects: ProjectModel[];
  tasks: TaskModel[];
}
