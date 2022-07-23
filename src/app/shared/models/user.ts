export type UserRole = 'company-owner' | 'manager' | 'developer';

export interface User {
  id: number;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
