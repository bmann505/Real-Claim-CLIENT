import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClaimFormComponent } from './new-claim-form.component';

describe('NewClaimFormComponent', () => {
  let component: NewClaimFormComponent;
  let fixture: ComponentFixture<NewClaimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClaimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
