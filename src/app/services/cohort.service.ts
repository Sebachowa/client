import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CohortService {
  baseUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  
  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/cohorts`, options)
    .toPromise();
  }

  create(data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/cohorts`, data, options)
      .toPromise();
    
  }
}
