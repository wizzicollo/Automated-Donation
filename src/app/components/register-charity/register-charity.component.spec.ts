import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCharityComponent } from './register-charity.component';

describe('RegisterCharityComponent', () => {
  let component: RegisterCharityComponent;
  let fixture: ComponentFixture<RegisterCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
