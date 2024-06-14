import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}
  private url = 'https://restcountries.com/v3.1';

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of([]);
      }),
      delay(1000)
    );
  }

  searchByCountry(term: string): Observable<Country[]> {
    return this.getCountryRequest(`${this.url}/name/${term}`);
  }
  searchByCapital(term: string): Observable<Country[]> {
    return this.getCountryRequest(`${this.url}/capital/${term}`);
  }

  searchByRegion(term: string) {
    return this.getCountryRequest(`${this.url}/region/${term}`);
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.url}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}
