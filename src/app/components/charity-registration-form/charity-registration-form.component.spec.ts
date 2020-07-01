import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityRegistrationFormComponent } from './charity-registration-form.component';

describe('CharityRegistrationFormComponent', () => {
  let component: CharityRegistrationFormComponent;
  let fixture: ComponentFixture<CharityRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
