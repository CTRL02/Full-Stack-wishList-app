import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  notify(message: string) {
    this.errorSubject.next(message);
  }
}
