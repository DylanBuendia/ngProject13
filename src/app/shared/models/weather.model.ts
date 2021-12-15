export interface ICityWeather {
  name: string;
  temp: number;
  description: string;
  icon: string
}
export interface IMainData{
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number
}

export interface IWeatherData{
  description: string;
  icon: string;
  id: number;
  main: string
}

export interface ISysData{
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number
}

export interface ICloudsData{
  all: number
}

export interface ICoordData{
  lon: number;
  lat: number
}

export interface IWindData{
  speed: number;
  deg: number
}

export interface ICityData{
  base: string
  clouds: ICloudsData
  cod: number
  coord: ICoordData
  dt: number
  id: number
  main: IMainData
  name: string
  sys: ISysData
  timezone: number
  visibility: number
  weather: IWeatherData[]
  wind: IWindData
}

export class CityWeather {

  protected constructor(
      public name = '',
      public temp = 0,
      public description = '',
      public icon = ''
  ) { }

  public static Build(cityWeather: ICityData): CityWeather {
      return new this(
        cityWeather.name,
        cityWeather.main.temp,
        cityWeather.weather[0].description,
        `http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`
      );
  }
}
