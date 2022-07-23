export type UserRole = 'Company owner' | 'Manager' | 'Developer';

export interface User {
  id: number;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
