import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewbokingComponent } from './studentviewboking.component';

describe('StudentviewbokingComponent', () => {
  let component: StudentviewbokingComponent;
  let fixture: ComponentFixture<StudentviewbokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewbokingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewbokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
