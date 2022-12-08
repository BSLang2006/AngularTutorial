import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildButtonsComponent } from './build-buttons.component';

describe('BuildButtonsComponent', () => {
  let component: BuildButtonsComponent;
  let fixture: ComponentFixture<BuildButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
