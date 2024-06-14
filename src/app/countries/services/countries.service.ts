import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}
  private url = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of([]);
      })
    );
  }

  searchByCountry(term: string): Observable<Country[]> {
    return this.getCountryRequest(`${this.url}/name/${term}`).pipe(
      tap((countries) => (this.cacheStore.byCountry = { term, countries }))
    );
  }
  searchByCapital(term: string): Observable<Country[]> {
    return this.getCountryRequest(`${this.url}/capital/${term}`).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries }))
    );
  }

  searchByRegion(region: Region) {
    return this.getCountryRequest(`${this.url}/region/${region}`).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries }))
    );
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.url}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}
