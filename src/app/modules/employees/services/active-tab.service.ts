import {Injectable} from '@angular/core';
import {ActiveTab} from "../models/active-tab.model";

@Injectable()
export class ActiveTabService {
  public activeTab: ActiveTab = 'list';

  constructor() { }
}
