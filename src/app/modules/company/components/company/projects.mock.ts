import {Project} from "@shared/models/project.model";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Tomi Systems',
    devs: ['George Doudouliakis', 'Theofilos Papadopoulos'],
    tasks: [
      {
        id: 1,
        title: 'Code refactors',
        estimation: '1h',
        status: 'To Do',
        dueDate: '09/12/2022'
      }
    ],
  },
  {
    id: 2,
    name: 'Pure Profile',
    devs: ['Theofilos Papadopoulos'],
    tasks: []
  },
  {
    id: 3,
    name: 'KissAcademy',
    devs: ['George Doudouliakis', 'Chrysa Lazaridou', 'Kostas Zeimpekis'],
    tasks: []
  },
  {
    id: 4,
    name: 'Schoox',
    devs: ['George Doudouliakis', 'Michalis Tzikas'],
    tasks: []
  }
];
