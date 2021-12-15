import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICityWeather } from 'src/app/shared/models/weather.model';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'ex-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

  detailsWeather$! : Observable<ICityWeather>

  public city = 'Milano'

  constructor(private readonly weatherService : WeatherService) { }

  ngOnInit(): void {

    this.weatherService.getWeatherByName(this.city).subscribe(data => console.log(data))

  }

  submit(param :string){
    this.detailsWeather$ = this.weatherService.getWeatherByName(param);

  }

}
