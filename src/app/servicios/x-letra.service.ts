import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XLetraService {
  private apiUrl ="https://www.themealdb.com/api/json/v1/1"

  constructor(private http: HttpClient) { }

  obtenerLetra(name: string): Observable<any>{
    return this.http.get<Response>(`${this.apiUrl}/search.php?f=${name}`)
  }
}
