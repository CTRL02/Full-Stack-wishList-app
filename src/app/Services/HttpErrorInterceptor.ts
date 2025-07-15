import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './ErrorService';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
    
        if (error.status === 0) {
          // Client-side or network error
          console.error('Client/network error occurred:', error.error);
        } else {
          // Backend error
          console.error(`Backend returned code ${error.status}, body was:`, error.error);
        }

        // Notify user with a consistent message without too much info
        this.errorService.notify("Oops! Something went wrong. Please try again later.");

        return throwError(() => new Error(error.message || 'Something went wrong. Please try again.'));
      })
    );
  }
}
