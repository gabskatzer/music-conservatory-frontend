import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'http://localhost:8090/api/people'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
