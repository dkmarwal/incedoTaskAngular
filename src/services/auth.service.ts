import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor() { }

  setLoggedInVal(value: Boolean): void {
    this.isLoggedIn.next(value);
  }

  getLoggedInVal(): Observable<Boolean> {
    return this.isLoggedIn.asObservable();
  }
}
