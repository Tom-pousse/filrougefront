import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aliment } from '../models/aliment';

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  constructor(private http: HttpClient) {}

  getAliments(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>('http://localhost:3000/api/aliments');
  }
}
