import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather-service/weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather | undefined;

  constructor(private weatherService: WeatherService) { 
    
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('London', 'UK').subscribe((data: ICurrentWeather) => {
      this.current = data;
    });
  }

}
