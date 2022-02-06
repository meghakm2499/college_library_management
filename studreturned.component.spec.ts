import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudreturnedComponent } from './studreturned.component';

describe('StudreturnedComponent', () => {
  let component: StudreturnedComponent;
  let fixture: ComponentFixture<StudreturnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudreturnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudreturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
