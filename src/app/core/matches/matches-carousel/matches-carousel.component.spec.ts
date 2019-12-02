import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesCarouselComponent } from './matches-carousel.component';

describe('MatchesCarouselComponent', () => {
  let component: MatchesCarouselComponent;
  let fixture: ComponentFixture<MatchesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
