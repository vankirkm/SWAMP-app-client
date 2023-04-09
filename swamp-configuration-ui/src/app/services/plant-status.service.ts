import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantStatus } from '../models/PlantStatus';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PlantStatusService {

baseUrl = environment.configServiceBaseUrl;
productionStatus = environment.production;
dataURL = './assets/data/plantStatus.json';

constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getStatusForUser(userId: number): Observable<PlantStatus[]> {
    return this.http.get<PlantStatus[]>(this.baseUrl + "statuses/" + userId);
  }

  public getStatus(): Observable<PlantStatus> {
    return this.http.get<PlantStatus>(this.dataURL)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
}
