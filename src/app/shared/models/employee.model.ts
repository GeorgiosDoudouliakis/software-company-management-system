export type EmployeeRole = 'Front End Developer' | 'Back End Developer' | 'Full Stack Developer' | 'QA' | 'Support Engineer';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  image?: string; // TODO type
  birthdate: string; // TODO type
  gender: 'male' | 'female';
  role: EmployeeRole;
  isManager: boolean;
}
