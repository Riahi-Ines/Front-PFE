import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpyComponent } from './fpy.component';

describe('FpyComponent', () => {
  let component: FpyComponent;
  let fixture: ComponentFixture<FpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
