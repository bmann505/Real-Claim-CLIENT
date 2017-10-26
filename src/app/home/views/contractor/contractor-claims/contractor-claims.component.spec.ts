import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorClaimsComponent } from './contractor-claims.component';

describe('ContractorClaimsComponent', () => {
  let component: ContractorClaimsComponent;
  let fixture: ComponentFixture<ContractorClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
