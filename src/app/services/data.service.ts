import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitEmployeeData(data) {
    this.observer.next(data);
}
}