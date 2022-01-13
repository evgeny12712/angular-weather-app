import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemServiceService', () => {
  let service: ItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
