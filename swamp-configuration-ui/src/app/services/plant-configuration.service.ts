import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantConfiguration } from '../models/PlantConfiguration';

@Injectable({
  providedIn: 'root'
})
export class PlantConfigurationService {

  baseUrl = environment.configServiceBaseUrl;
  productionStatus = environment.production;

  constructor(private http: HttpClient) { }

  public getConfigsForUser(userId: number): Observable<PlantConfiguration[]> {
    return this.http.get<PlantConfiguration[]>(this.baseUrl + "configs/" + userId);
  }

  public updateConfig(plantConfig: PlantConfiguration): Observable<PlantConfiguration> {
    return this.http.put<PlantConfiguration>(this.baseUrl + "configs", plantConfig);
  }

}
