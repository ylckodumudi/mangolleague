import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWeekComponent } from './recent-week.component';

describe('RecentWeekComponent', () => {
  let component: RecentWeekComponent;
  let fixture: ComponentFixture<RecentWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
