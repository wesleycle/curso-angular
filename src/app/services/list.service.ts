import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiurl = "http://localhost:3000/animals"

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiurl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiurl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiurl}/${id}`);
  }
}
