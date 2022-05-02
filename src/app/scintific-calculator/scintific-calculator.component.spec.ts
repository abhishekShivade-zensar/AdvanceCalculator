import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScintificCalculatorComponent } from './scintific-calculator.component';

describe('ScintificCalculatorComponent', () => {
  let component: ScintificCalculatorComponent;
  let fixture: ComponentFixture<ScintificCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScintificCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScintificCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
