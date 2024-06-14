import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}
  private url = 'https://restcountries.com/v3.1';

  searchByCountry(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/name/${term}`).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of([]);
      })
    );
  }
  searchByCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of([]);
      })
    );
  }

  searchByRegion(term: string) {
    return this.httpClient.get<Country[]>(`${this.url}/region/${term}`).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of([]);
      })
    );
  }
}
