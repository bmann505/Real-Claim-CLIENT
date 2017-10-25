import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustorComponent } from './adjustor.component';

describe('AdjustorComponent', () => {
  let component: AdjustorComponent;
  let fixture: ComponentFixture<AdjustorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
