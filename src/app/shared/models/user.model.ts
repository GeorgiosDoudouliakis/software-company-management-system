export type UserRole = 'company-owner' | 'manager' | 'developer';

export interface UserModel {
  id: number;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
