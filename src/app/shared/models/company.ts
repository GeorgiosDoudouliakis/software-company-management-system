import {Project} from "./project";

export interface Company {
  id: number;
  name: string;
  establishment: string; // TODO type
  description: string;
  logo: string; // TODO type
  projects: Project[];
  services: string[];
}
