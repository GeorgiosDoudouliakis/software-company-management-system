import {Project} from "./project.model";
import {Service} from "./service.model";

export interface Company {
  id: number;
  name: string;
  establishment: string; // TODO type
  description: string;
  logo: string; // TODO type
  projects: Project[];
  services: Service[];
}
