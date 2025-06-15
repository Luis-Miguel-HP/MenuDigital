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
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';

  constructor(private http: HttpClient) {}

  buscarPlatillo(nombre: string): Observable<mealsRes> {
    return this.http.get<mealsRes>(`${this.apiUrl}?s=${encodeURIComponent(nombre)}`);
  }
}
