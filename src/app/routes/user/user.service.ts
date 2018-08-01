import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://blogrest.azurewebsites.net/api/users';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<IUser | undefined> {
    return this.http.get<IUser>(this.userUrl + "/" + id).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}