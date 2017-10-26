import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerClaimsComponent } from './owner-claims.component';

describe('OwnerClaimsComponent', () => {
  let component: OwnerClaimsComponent;
  let fixture: ComponentFixture<OwnerClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
