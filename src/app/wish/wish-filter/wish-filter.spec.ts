import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFilter } from './wish-filter';

describe('WishFilter', () => {
  let component: WishFilter;
  let fixture: ComponentFixture<WishFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
