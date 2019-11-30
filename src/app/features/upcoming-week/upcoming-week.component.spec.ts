import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingWeekComponent } from './upcoming-week.component';

describe('UpcomingWeekComponent', () => {
  let component: UpcomingWeekComponent;
  let fixture: ComponentFixture<UpcomingWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
