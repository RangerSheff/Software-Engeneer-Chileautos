import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episode, GenericResponseDto, HealthStatus } from '../app.state';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:4000/rick-and-morty/v1';

  constructor(private http: HttpClient) {}

  getHealthCheck(): Observable<HealthStatus> {
    return this.http.get<HealthStatus>(`${this.baseUrl}/private/health`);
  }

  getAllEpisodes(page: number): Observable<GenericResponseDto> {
    return this.http.get<GenericResponseDto>(`${this.baseUrl}/episode/all?page=${page}`);
  }

  getByIdsEpisode(ids: string): Observable<GenericResponseDto> {
    return this.http.get<GenericResponseDto>(`${this.baseUrl}/episode?ids=${ids}`);
  }
}
