import {ProjectModel} from "./project";

export interface CompanyModel {
  id: number;
  name: string;
  establishment: string; // TODO type
  description: string;
  logo: string; // TODO type
  projects: ProjectModel[];
  services: string[];
}
