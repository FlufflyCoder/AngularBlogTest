import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { IArticle } from './article';
import { ISubject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  private articleUrl = 'http://blogrest.azurewebsites.net/api/articles';
  private subjectUrl = 'http://blogrest.azurewebsites.net/api/subjects';

  constructor(private http:HttpClient) { 

  }  

  getArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>(this.articleUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  getSubjects(): Observable<ISubject[]>{
    return this.http.get<ISubject[]>(this.subjectUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  getArticle(id: number): Observable<IArticle | undefined> {
    return this.http.get<IArticle>(this.articleUrl + "/" + id).pipe(
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
