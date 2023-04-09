import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantStatus } from '../models/PlantStatus';

@Injectable({
  providedIn: 'root'
})
export class PlantStatusService {

baseUrl = environment.configServiceBaseUrl;
  productionStatus = environment.production;

  constructor(private http: HttpClient) { }

  public getStatusForUser(userId: number): Observable<PlantStatus[]> {
    return this.http.get<PlantStatus[]>(this.baseUrl + "statuses/" + userId);
  }

  public updateStatus(plantStatus: PlantStatus): Observable<PlantStatus> {
    // make http call to update status
    return this.http.put<PlantStatus>(this.baseUrl + "statuses", plantStatus); // this is to avoid an error currently
  }
}
