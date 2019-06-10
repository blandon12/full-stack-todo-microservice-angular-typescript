import { TestBed } from '@angular/core/testing';

import { ListTodosDataService } from './list-todos-data.service';

describe('ListTodosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTodosDataService = TestBed.get(ListTodosDataService);
    expect(service).toBeTruthy();
  });
});
