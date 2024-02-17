import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  apiUrl = "http://localhost:3000";

  connectMember(adress: string, pass: string): Observable<any> {
    console.log(this.apiUrl);
    return this._http.post(`${this.apiUrl}/login`, { adress, pass });
  }

  // REGISTER
  registerMember(pseudo: string, adress: string, phone: number, pass: string): Observable<any> {
    // Utilisation de l'URL correcte pour la route d'inscription
    console.log(this.apiUrl);
    return this._http.post(`${this.apiUrl}/signup`, {pseudo, adress, phone, pass});
  }
}
