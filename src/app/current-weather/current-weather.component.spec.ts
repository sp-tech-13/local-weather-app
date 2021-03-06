import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture,  TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather-service/weather-service.service';
import { WeatherServiceFake } from '../weather-service/weather-service.fake.spec';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CurrentWeatherComponent ],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
