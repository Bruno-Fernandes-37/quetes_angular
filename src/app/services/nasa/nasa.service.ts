import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  readonly API_URL: string = "https://api.nasa.gov/planetary/apod?api_key=";
  readonly API_KEY: string = "gNtBPDfrW5LNwxeYqr1n1l7Y49cJgwTtjPCfwwIu";

  constructor(public httpClient: HttpClient) { }

  getImageOfTheDay(): Observable<string>{
    return this.httpClient.get<string>(this.API_URL + this.API_KEY)
  }
}
