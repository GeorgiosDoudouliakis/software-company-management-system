import {Employee} from "@shared/models/employee.model";

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    firstName: 'George',
    lastName: 'Doudouliakis',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Front End Developer',
    projects: [
      {
        id: 1,
        name: 'Tomi Systems'
      }
    ],
    tasks: [
      {
        id: 1,
        title: 'Code refactors',
        projectId: 1,
        estimation: '1h',
        status: 'To Do',
        dueDate: '09/12/2022'
      }
    ],
    isManager: false
  },
  {
    id: 2,
    firstName: 'Theofilos',
    lastName: 'Papadopoulos',
    birthdate: '12/11/1989',
    gender: 'male',
    role: 'Full Stack Developer',
    projects: [
      {
        id: 1,
        name: 'Tomi Systems'
      },
      {
        id: 2,
        name: 'Pure Profile'
      }
    ],
    tasks: [],
    isManager: true
  },
  {
    id: 3,
    firstName: 'Michalis',
    lastName: 'Tzikas',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Full Stack Developer',
    projects: [
      {
        id: 3,
        name: 'Schoox'
      }
    ],
    tasks: [],
    isManager: true
  },
  {
    id: 4,
    firstName: 'Vasilis',
    lastName: 'Georgopoulos',
    birthdate: '08/12/1994',
    gender: 'male',
    role: 'Back End Developer',
    projects: [
      {
        id: 1,
        name: 'Tomi Systems'
      },
      {
        id: 4,
        name: 'VMWare'
      }
    ],
    tasks: [
      {
        id: 2,
        title: 'Code refactors',
        projectId: 4,
        estimation: '1h',
        status: 'To Do',
        dueDate: '09/12/2022'
      }
    ],
    isManager: false
  }
];
