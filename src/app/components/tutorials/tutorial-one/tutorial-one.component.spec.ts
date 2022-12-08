import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialOneComponent } from './tutorial-one.component';

describe('TutorialOneComponent', () => {
  let component: TutorialOneComponent;
  let fixture: ComponentFixture<TutorialOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
