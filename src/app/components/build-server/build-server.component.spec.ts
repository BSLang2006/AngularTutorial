import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildServerComponent } from './build-server.component';

describe('BuildServerComponent', () => {
  let component: BuildServerComponent;
  let fixture: ComponentFixture<BuildServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
