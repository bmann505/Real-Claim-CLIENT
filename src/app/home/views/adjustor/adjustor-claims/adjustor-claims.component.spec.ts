import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustorClaimsComponent } from './adjustor-claims.component';

describe('AdjustorClaimsComponent', () => {
  let component: AdjustorClaimsComponent;
  let fixture: ComponentFixture<AdjustorClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustorClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustorClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
