import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface mealsRes{
  meals: any[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class XNombreService {
  private apiUrl ="https://www.themealdb.com/api/json/v1/1"

  constructor(private http: HttpClient) { }

  obtenerNombre(name: string): Observable<any>{
    return this.http.get<Response>(`${this.apiUrl}/search.php?s=${name}`)
  }
}
