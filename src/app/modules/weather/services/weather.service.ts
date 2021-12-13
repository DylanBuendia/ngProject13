import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ICityWeather } from 'src/app/shared/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  getWeatherByName(city: string): Observable<ICityWeather> {
    const params = new HttpParams().set('q', city).set('appid', '82c405a7a3c7f1bf1df8d93eeec1bfa9');

    return this.http.get<any>(`${environment.apiUrl}2.5/weather`, { params }).pipe(
      map(response => ({ name: response.name, temp: response.main.temp, description: response.weather[0].description}))
    )


  }

}
