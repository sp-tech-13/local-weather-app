import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { injectSpy } from 'angular-unit-test-helper';

import { WeatherService } from './weather-service.service';

describe('WeatherServiceService', () => {
  let service: WeatherService;
  
  beforeEach(() => {
  
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = injectSpy(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
