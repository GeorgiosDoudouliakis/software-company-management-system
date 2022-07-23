export type UserRole = 'Company owner' | 'Manager' | 'Developer';

export interface UserModel {
  id: number;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
