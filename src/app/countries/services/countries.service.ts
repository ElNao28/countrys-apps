import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = 'https://restcountries.com/v3.1'
  //

  constructor(private http:HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const urlApi = `${this.url}/alpha/${code}`;
    return this.http.get<Country[]>(urlApi)
    .pipe(
      map(countries => countries.length > 0? countries[0]: null),
      catchError(error =>of(null))
    );
  }

  searchCapital(term:string): Observable<Country[]> {
    const urlApi = `${this.url}/capital/${term}`;
    return this.http.get<Country[]>(urlApi)
    .pipe(
      catchError(error =>of([]))
    );
  }

  searchCountry(term: string):Observable<Country[]> {
    const urlApi = `${this.url}/name/${term}`;
    return this.http.get<Country[]>(urlApi)
    .pipe(
      catchError(error =>of([]))
    );
  }

  searchRegion(term: string):Observable<Country[]> {
    const urlApi = `${this.url}/region/${term}`;
    return this.http.get<Country[]>(urlApi)
    .pipe(
      catchError(error =>of([]))
    );
  }
}
