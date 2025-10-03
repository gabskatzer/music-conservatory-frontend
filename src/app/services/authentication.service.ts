import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean{
    return !!localStorage.getItem('authToken');
  }

  login(credentials: any): Observable<boolean>{
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        if (response && response.valid == true){
          localStorage.setItem('authToken', response.username);
          return true;
        }
        else{
          return false;
        }
      })
    )
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
