import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDishesComponent } from './featured-dishes.component';

describe('FeaturedDishesComponent', () => {
  let component: FeaturedDishesComponent;
  let fixture: ComponentFixture<FeaturedDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
