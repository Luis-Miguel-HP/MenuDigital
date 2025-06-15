import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AleatorioService {
  private api ="https://themealdb.com/api/json/v1/1/random.php";

  constructor(private http: HttpClient) { }
  
  conseguirAleatorio(): Observable<any>{
  return this.http.get(this.api)

}
}

