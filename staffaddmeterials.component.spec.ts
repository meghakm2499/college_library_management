import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffaddmeterialsComponent } from './staffaddmeterials.component';

describe('StaffaddmeterialsComponent', () => {
  let component: StaffaddmeterialsComponent;
  let fixture: ComponentFixture<StaffaddmeterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffaddmeterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffaddmeterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
