import { TestBed } from '@angular/core/testing';

import { PlantConfigurationService } from './plant-configuration.service';

describe('PlantConfigurationService', () => {
  let service: PlantConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
