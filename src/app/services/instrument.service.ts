import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private apiUrl = 'http://localhost:8090/api/instrument';

  constructor(private http: HttpClient) { }

  getAllInstruments(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(this.apiUrl);
  }

  deleteInstrument(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
