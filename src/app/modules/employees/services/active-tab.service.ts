import {Injectable} from '@angular/core';
import {ActiveTab} from "../models/active-tab.model";
import {EMPLOYEES} from "../components/list/employees.mock";

@Injectable()
export class ActiveTabService {
  // TODO inject employees service to get employees length
  public activeTab: ActiveTab = EMPLOYEES.length > 0 ? 'list' : 'create';

  constructor() { }
}
