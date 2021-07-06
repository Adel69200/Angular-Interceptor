import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiQueryService {
  constructor(private http: HttpClient) {}
  public url: string = 'https://jsonplaceholder.typicode.com/todos/1';
  getPlaceholder(): Observable<any> {
    const obs = this.http.get(this.url);
    const response = (data: any) => data as JSON;
    return obs.pipe(map(response));
  }
}
