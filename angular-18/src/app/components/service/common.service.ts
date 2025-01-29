import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public onRoleChange$: Subject<string> = new Subject<string>;
  public role$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor() { }
}
