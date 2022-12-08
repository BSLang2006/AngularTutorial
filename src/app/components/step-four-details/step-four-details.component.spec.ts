import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourDetailsComponent } from './step-four-details.component';

describe('StepFourDetailsComponent', () => {
  let component: StepFourDetailsComponent;
  let fixture: ComponentFixture<StepFourDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFourDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
