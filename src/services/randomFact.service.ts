import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RandomFactService {
  url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
  constructor(private http: HttpClient) {}

  getRandomFact(): Observable<object> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}
