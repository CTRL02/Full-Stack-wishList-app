import { TestBed } from '@angular/core/testing';

import { Wishtlist } from './wishtlist';

describe('Wishtlist', () => {
  let service: Wishtlist;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wishtlist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
