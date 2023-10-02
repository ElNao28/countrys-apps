import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of, delay } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const urlApi = `${this.url}/alpha/${code}`;
    return this.http.get<Country[]>(urlApi)
    .pipe(
      map(countries => countries.length > 0? countries[0]: null),
      catchError(error =>of(null))
    );
  }

  private getCountryRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error =>of([])),
      delay(2000)
    );

  }
  searchCapital(term:string): Observable<Country[]> {
    const urlApi = `${this.url}/capital/${term}`;
    return this.getCountryRequest(urlApi);
  }

  searchCountry(term: string):Observable<Country[]> {
    const urlApi = `${this.url}/name/${term}`;
    return this.getCountryRequest(urlApi);
  }

  searchRegion(term: string):Observable<Country[]> {
    const urlApi = `${this.url}/region/${term}`;
    return this.getCountryRequest(urlApi);
  }
}
