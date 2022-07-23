import {Employee} from "@shared/models/employee.model";

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    firstName: 'George',
    lastName: 'Doudouliakis',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Front End Developer',
    isManager: false
  },
  {
    id: 2,
    firstName: 'Theofilos',
    lastName: 'Papadopoulos',
    birthdate: '12/11/1989',
    gender: 'male',
    role: 'Full Stack Developer',
    isManager: true
  },
  {
    id: 3,
    firstName: 'Michalis',
    lastName: 'Tzikas',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Full Stack Developer',
    isManager: true
  },
  {
    id: 4,
    firstName: 'Vasilis',
    lastName: 'Georgopoulos',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Back End Developer',
    isManager: false
  }
];
