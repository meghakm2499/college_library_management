import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewbookingComponent } from './adminviewbooking.component';

describe('AdminviewbookingComponent', () => {
  let component: AdminviewbookingComponent;
  let fixture: ComponentFixture<AdminviewbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
