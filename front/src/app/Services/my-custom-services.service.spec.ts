import { TestBed, inject } from '@angular/core/testing';

import { MyCustomServicesService } from './my-custom-services.service';

describe('MyCustomServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCustomServicesService]
    });
  });

  it('should be created', inject([MyCustomServicesService], (service: MyCustomServicesService) => {
    expect(service).toBeTruthy();
  }));
});
