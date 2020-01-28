import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachingAreaComponent } from './approaching-area.component';

describe('ApproachingAreaComponent', () => {
  let component: ApproachingAreaComponent;
  let fixture: ComponentFixture<ApproachingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproachingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
